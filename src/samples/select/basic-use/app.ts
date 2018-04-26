export class App {
	disabled = true;
	readonly = true;
	selectedValue = "";
	selectedValue2 = "";
	selectedValue3 = "";

	setSelectedValue() {
		this.selectedValue = "item3";
	}

	setSelectedValue2() {
		this.selectedValue2 = "item3";
	}

	setSelectedValue3() {
		this.selectedValue3 = "item3";
	}

	toggle() {
		this.disabled = !this.disabled;
	}

	toggleReadonly() {
		this.readonly = !this.readonly;
	}
}
