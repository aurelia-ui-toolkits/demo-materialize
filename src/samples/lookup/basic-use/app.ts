import { observable } from "aurelia-binding";
import { MdLookup, DiscardablePromise, discard, FilterChangedHandler } from "aurelia-materialize-bridge";

export class App {
	companies = ["Microsoft", "Google", "Apple"];

	options: Array<string | symbol>;

	value: string;

	onSelected(value: string) {
		this.options = this.companies.filter(x => x === value);
	}

	filterChangedHandler = new FilterChangedHandler<string>(x => this.options = x, filter => this.searchCompanies(filter));

	searchCompanies(filter: string): Promise<string[]> {
		return new Promise<any[]>((resolve, reject) => {
			setTimeout(() => resolve(this.companies.filter(x => x.includes(filter))), 1000);
		});
	}

	setValue() {
		this.value = this.companies[2];
	}
}
