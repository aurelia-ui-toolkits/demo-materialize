export class App {
	selectedDate = null;

	setDate() {
		let date = new Date();
		this.selectedDate = date;
	}

	log(e) {
		console.log(e);
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
