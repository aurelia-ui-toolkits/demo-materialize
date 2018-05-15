import { observable, inject, NewInstance } from "aurelia-framework";
import { ValidationController, ValidationRules, validateTrigger } from "aurelia-validation";
import { ILookupOptionsFunctionParameter, MaterializeFormValidationRenderer } from "aurelia-materialize-bridge";

interface ICompany {
	id: number;
	name: string;
}

@inject(NewInstance.of(ValidationController))
export class App {
	constructor(private controller: ValidationController) {
		this.controller.addRenderer(new MaterializeFormValidationRenderer());
		controller.validateTrigger = validateTrigger.changeOrBlur;
		ValidationRules.ensure<this, ICompany>(x => x.value).required().on(this);
	}

	companies: ICompany[] = [{ id: 1, name: "Microsoft" }, { id: 2, name: "Google" }, { id: 3, name: "Apple" }];

	value: ICompany;

	optionsFunction(p: ILookupOptionsFunctionParameter<ICompany>): Promise<ICompany[]> {
		if (p.value) {
			return Promise.resolve([p.value]);
		}
		else {
			return this.searchCompanies(p.filter);
		}
	}

	searchCompanies(filter: string): Promise<any[]> {
		return new Promise<any[]>((resolve, reject) => {
			setTimeout(() => resolve(this.companies.filter(x => x.name.includes(filter) || x.id.toString().includes(filter))), 1000);
		});
	}

	setValue() {
		this.value = this.companies[2];
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
