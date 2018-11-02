import { inject, NewInstance } from "aurelia-framework";
import { ValidationController, ValidationRules, ValidationControllerFactory, validateTrigger } from "aurelia-validation";
import { MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";

@inject(ValidationControllerFactory)
export class App {
	message = "";
	tick = false;
	option: number;

	controller: ValidationController = null;

	rules = ValidationRules
		.ensure("tick").satisfies(x => x)
		.ensure("option").required()
		.rules;

	constructor(controllerFactory: ValidationControllerFactory) {
		this.controller = controllerFactory.createForCurrentScope();
		this.controller.addRenderer(new MaterializeFormValidationRenderer());
		this.controller.validateTrigger = validateTrigger.changeOrBlur;
		this.controller.addObject(this, this.rules);
	}

	validateModel() {
		this.controller.validate().then(v => {
			if (v.valid) {
				this.message = "All is good!";
			} else {
				this.message = "You have errors!";
			}
		});
	}
}
