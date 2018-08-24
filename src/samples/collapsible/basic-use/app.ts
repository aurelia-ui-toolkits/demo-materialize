import { MdCollapsible } from "aurelia-materialize-bridge";

export class App {
	collapsible: MdCollapsible;

	attached() {
		this.collapsible.open();
	}
}
