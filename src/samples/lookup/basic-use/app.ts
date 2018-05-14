import { observable } from "aurelia-binding";
import { MdLookup, DiscardablePromise, discard } from "aurelia-materialize-bridge";

export class App {
	searchPromise: DiscardablePromise<any[]>;
	async onFilterChanged(filter: string) {
		this.options = [MdLookup.searching];
		if (this.searchPromise) {
			this.searchPromise.discard();
		}
		try {
			this.searchPromise = new DiscardablePromise(this.searchCompanies(filter));
			this.options = await this.searchPromise;
		}
		catch (e) {
			this.options = [MdLookup.error, e];
		}
	}

	companies = [{ id: 1, name: "Microsoft" }, { id: 2, name: "Google" }, { id: 3, name: "Apple" }];

	options: any[];

	value: any = this.companies[0];

	searchCompanies(filter: string): Promise<any[]> {
		return new Promise<any[]>((resolve, reject) => {
			if (filter === "ng") {
				reject("wrong!");
			}
			else {
				setTimeout(() => resolve(this.companies.filter(x => x.name.includes(filter) || x.id.toString().includes(filter))), 1000);
			}
		});
	}

	setValue() {
		this.value = this.companies[2];
	}

	getDisplayName(x: any) {
		return x.id + "-" + x.name;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
