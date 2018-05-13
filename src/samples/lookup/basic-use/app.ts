import { observable } from "aurelia-binding";
import { Lookup } from "../../../lookup/lookup";

class DiscardablePromise<T> implements PromiseLike<T> {
	constructor(private promise: Promise<T>) { }

	isDiscarded: boolean;

	then<TResult1 = T, TResult2 = never>(onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return this.promise
			.then(x => {
				if (!this.isDiscarded) {
					if (onfulfilled) {
						return onfulfilled(x);
					}
				}
			})
			.catch(x => {
				console.log("catch", x);
				if (!this.isDiscarded) {
					if (onrejected) {
						return onrejected(x);
					}
				}
			});
	}

	discard() {
		this.isDiscarded = true;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class App {
	@observable
	filter1: string = "o";
	search1Promise: DiscardablePromise<any[]>;
	async filter1Changed() {
		this.options1 = [Lookup.searching];
		if (this.search1Promise) {
			this.search1Promise.discard();
		}
		try {
			this.search1Promise = new DiscardablePromise(this.searchCompanies(this.filter1));
			this.options1 = await this.search1Promise;
		}
		catch (e) {
			this.options1 = [Lookup.error, e];
		}
	}

	@observable
	filter2: string = "o";
	search2Promise: DiscardablePromise<any[]>;
	async filter2Changed() {
		this.options2 = [Lookup.searching];
		if (this.search2Promise) {
			this.search2Promise.discard();
		}
		try {
			this.search2Promise = new DiscardablePromise(this.searchCompanies(this.filter2));
			this.options2 = await this.search2Promise;
		}
		catch (e) {
			this.options2 = [Lookup.error, e];
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
