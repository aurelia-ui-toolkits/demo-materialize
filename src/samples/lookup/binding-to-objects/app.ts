import { observable } from "aurelia-binding";
import { MdLookup, DiscardablePromise, discard, FilterChangedHandler } from "aurelia-materialize-bridge";

interface ICompany {
	id: number;
	name: string;
}

export class App {

	companies: ICompany[] = [{ id: 1, name: "Microsoft" }, { id: 2, name: "Google" }, { id: 3, name: "Apple" }];

	value: ICompany = this.companies[0];

	options: Array<ICompany | symbol> = [this.value];

	onSelected(value: ICompany) {
		console.log("onValueChanged", value);
		this.options = this.companies.filter(x => x === value);
	}

	filterChangedHandler = new FilterChangedHandler<ICompany>(x => this.options = x, filter => this.searchCompanies(filter));

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
