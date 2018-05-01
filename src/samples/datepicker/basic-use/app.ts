export class App {
	selectedDate = null;

	body = document.body;

	setDate() {
		let date = new Date();
		this.selectedDate = date;
	}
}

// tslint:disable-next-line:max-classes-per-file
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value);
	}
}
