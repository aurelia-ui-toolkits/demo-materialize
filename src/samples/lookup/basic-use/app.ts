import { observable } from "aurelia-binding";
import { ILookupOptionsFunctionParameter } from "aurelia-materialize-bridge";

export class App {
	companies = ["Microsoft", "Google", "Apple"];

	value: string;

	optionsFunction(p: ILookupOptionsFunctionParameter<string>): Promise<string[]> {
		if (p.value) {
			return Promise.resolve([p.value]);
		}
		else {
			return this.searchCompanies(p.filter);
		}
	}

	searchCompanies(filter: string): Promise<string[]> {
		return new Promise<any[]>((resolve, reject) => {
			setTimeout(() => resolve(this.companies.filter(x => x.includes(filter))), 1000);
		});
	}

	setValue() {
		this.value = this.companies[2];
	}
}
