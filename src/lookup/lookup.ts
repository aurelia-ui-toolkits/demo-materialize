import { ValidateResult } from "aurelia-validation";
import { MaterializeFormValidationRenderer, fireEvent } from "aurelia-materialize-bridge";
import { autoinject, TaskQueue, View, bindable, bindingMode } from "aurelia-framework";
import { getLogger, Logger } from "aurelia-logging";
import { LookupState } from "./lookup-state";

@autoinject
export class Lookup {
	constructor(private element: Element, private taskQueue: TaskQueue) {
		this.logger = getLogger("Lookup");
	}

	static searching = Symbol("searching");
	static error = Symbol("error");

	searching: boolean;
	noMatches: boolean;
	showOptions: boolean;
	errorMessage: string;
	searchingMessage: string;

	dropdown: HTMLElement;
	dropdownUl: HTMLElement;
	input: HTMLInputElement;
	labelElement: HTMLLabelElement;
	validationContainer: HTMLElement;
	logger: Logger;
	view: View;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	filter: string;
	suppressFilterChanged: boolean;
	filterChanged() {
		if (this.suppressFilterChanged) {
			this.logger.debug("unsuppressed filter changed");
			this.suppressFilterChanged = false;
			return;
		}
		this.setValue(undefined);
	}
	setFilter(filter: string) {
		if (this.filter === filter) {
			return;
		}
		this.logger.debug("suppressed filter changed", filter);
		this.suppressFilterChanged = true;
		this.filter = filter;
	}

	@bindable
	label: string;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	value: any;
	suppressValueChanged: boolean;
	async valueChanged(newValue: any, oldValue: any) {
		if (this.suppressValueChanged) {
			this.logger.debug("unsuppressed value changed");
			this.suppressValueChanged = false;
			return;
		}
		this.logger.debug("valueChanged", newValue);
		await this.updateFilterBasedOnValue();
	}
	setValue(value: string) {
		if (this.value === value) {
			return;
		}
		this.logger.debug("suppressed value changed", value);
		this.suppressValueChanged = true;
		this.value = value;
	}

	@bindable
	displayFieldName: ((option: any) => string) | string;

	@bindable
	valueFieldName: ((option: any) => any) | string;

	@bindable({ defaultBindingMode: bindingMode.twoWay })
	readonly: boolean;

	@bindable
	placeholder: string = "Start Typing To Search";

	LookupState = LookupState;
	state: LookupState;

	@bindable
	options: any[];
	optionsChanged() {
		if (!this.options || !(this.options instanceof Array) || !this.options.length) {
			this.state = LookupState.noMatches;
		}
		else if (this.options[0] === Lookup.searching) {
			this.state = LookupState.searching;
			this.searchingMessage = this.options.length > 1 ? this.options[1] : "Searching...";
		}
		else if (this.options[0] === Lookup.error) {
			this.state = LookupState.error;
			this.errorMessage = this.options.length > 1 ? this.options[1] : "Error occurred";
		}
		else {
			this.state = LookupState.optionsVisible;
		}
	}

	isOpen: boolean;

	updateFilterBasedOnValue() {
		this.logger.debug("updateFilterBasedOnValue", this.value);
		this.options = [this.value];
		if (this.options && this.options.length) {
			this.setFilter(this.getDisplayValue(this.options[0]));
		} else {
			this.setFilter(undefined);
		}
	}

	fixDropdownSizeIfTooBig() {
		this.taskQueue.queueTask(() => {
			if (!this.isOpen) {
				return;
			}
			const rect = this.dropdown.getBoundingClientRect();
			let availableSpace = window.innerHeight - rect.top + document.body.scrollTop - 5;
			if (this.dropdownUl.offsetHeight > availableSpace) {
				this.dropdown.style.height = `${availableSpace}px`;
			}
			else {
				this.dropdown.style.height = "auto";
			}
		});
	}

	open() {
		if (!this.readonly) {
			this.logger.debug("open");
			this.isOpen = true;
			this.fixDropdownSizeIfTooBig();
		}
	}

	close() {
		this.logger.debug("close");
		this.isOpen = false;
	}

	bind(bindingContext: object, overrideContext: object) {
		if (this.value) {
			this.updateFilterBasedOnValue();
		}
	}

	attached() {
		this.logger.debug("attached");
		// we need to use queueTask because open sometimes happens before browser bubbles the click further thus closing just opened dropdown
		this.input.onselect = () => this.taskQueue.queueTask(() => this.open());
		this.input.onclick = () => this.taskQueue.queueTask(() => this.open());
		this.input.onblur = () => this.close();
		this.element.mdRenderValidateResults = this.mdRenderValidateResults;
		this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
		this.labelElement.classList.add(this.filter || this.placeholder ? "active" : "inactive");
	}

	detached() {
		this.input.onselect = null;
		this.input.onfocus = null;
		this.input.onblur = null;
		MaterializeFormValidationRenderer.removeValidation(this.validationContainer, this.input);
		this.element.mdRenderValidateResults = null;
		this.element.mdUnrenderValidateResults = null;
	}

	select(option: any) {
		if (this.valueFieldName) {
			if (this.valueFieldName instanceof Function) {
				this.value = this.valueFieldName(option);
			}
			else {
				this.value = option[this.valueFieldName];
			}
		} else {
			this.value = option;
		}
		// this.filter = this.getDisplayValue(option);
		// this.options = [option];
		this.close();
		fireEvent(this.element, "selected", { value: this.value });
	}

	getDisplayValue(option: any): any {
		if (!this.displayFieldName) {
			return option;
		}
		else if (this.displayFieldName instanceof Function) {
			return this.displayFieldName(option);
		}
		else {
			return option[this.displayFieldName];
		}
	}

	mdUnrenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.removeMessage(this.validationContainer, result);
			}
		}
		renderer.removeValidationClasses(this.input);
	}

	mdRenderValidateResults = (results: ValidateResult[], renderer: MaterializeFormValidationRenderer) => {
		for (let result of results) {
			if (!result.valid) {
				renderer.addMessage(this.validationContainer, result);
			}
		}
		renderer.addValidationClasses(this.input, !results.find(x => !x.valid));
	}
}
