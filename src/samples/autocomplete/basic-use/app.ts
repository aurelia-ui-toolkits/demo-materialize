import { Logger } from "../../../shared/logger";

export class App {
	logger: Logger;

	textValue = "";
	values: any = {
		Apple: null,
		Microsoft: null,
		Google: "http://placehold.it/250x250",
	};

	setOtherValues() {
		this.values = {
			Aurelia: "http://placehold.it/250x250",
			Angular: null,
			Ember: null
		};
	}

	autocomplete(detail) {
		this.logger.log("autocomplete " + JSON.stringify(detail));
	}

	change(detail) {
		this.logger.log("change " + JSON.stringify(detail));
	}

}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
