import { observable } from "aurelia-binding";
import { ILookupOptionsFunctionParameter } from "aurelia-materialize-bridge";

interface ICompany {
	id: number;
	name: string;
}

export class App {

	companies: ICompany[] = [{ id: 1, name: "Microsoft" }, { id: 2, name: "Google" }, { id: 3, name: "Apple" }];

	value: ICompany = this.companies[0];
	valueId: number = this.companies[0].id;

	optionsFunction(p: ILookupOptionsFunctionParameter<ICompany>): Promise<ICompany[]> {
		if (p.value) {
			return Promise.resolve([p.value]);
		}
		else {
			return this.searchCompanies(p.filter);
		}
	}

	options2Function(p: ILookupOptionsFunctionParameter<number>): Promise<ICompany[]> {
		if (p.value) {
			return Promise.resolve(this.companies.filter(x => x.id === p.value));
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
