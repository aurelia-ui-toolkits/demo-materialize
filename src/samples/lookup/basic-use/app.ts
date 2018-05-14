import { observable } from "aurelia-binding";
import {MdLookup, DiscardablePromise, discard } from "aurelia-materialize-bridge";

export class App {
	@observable
	filter1: string = "o";
	search1Promise: DiscardablePromise<any[]>;
	async filter1Changed() {
		this.options1 = [MdLookup.searching];
		discard(this.search1Promise);
		try {
			console.log("starting search", this.filter1);
			this.search1Promise = new DiscardablePromise(this.searchCompanies(this.filter1));
			this.options1 = await this.search1Promise;
			console.log(this.options1);
		}
		catch (e) {
			if (e !== DiscardablePromise.discarded) {
				console.log("catch", e);
				this.options1 = [MdLookup.error, e];
			}
		}
	}

	@observable
	filter2: string = "o";
	search2Promise: DiscardablePromise<any[]>;
	async filter2Changed() {
		this.options2 = [MdLookup.searching];
		if (this.search2Promise) {
			this.search2Promise.discard();
		}
		try {
			this.search2Promise = new DiscardablePromise(this.searchCompanies(this.filter2));
			this.options2 = await this.search2Promise;
		}
		catch (e) {
			this.options2 = [MdLookup.error, e];
		}
	}

	companies = [{ id: 1, name: "Microsoft" }, { id: 2, name: "Google" }, { id: 3, name: "Apple" }];

	options1: any[];
	options2: any[];

	value1: any;

	value2: any = this.companies[0];

	searchCompanies(filter: string): Promise<any[]> {
		return new Promise<any[]>((resolve, reject) => {
			if (filter === "ng") {
				reject("wrong!");
			}
			else {
				setTimeout(() => resolve(this.companies.filter(x => x.name.includes(filter))), 1000);
			}
		});
	}

	setValue() {
		this.value1 = this.companies[2];
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
