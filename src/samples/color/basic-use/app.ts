import { inject } from "aurelia-framework";
import { MdColorsService } from "aurelia-materialize-bridge";

@inject(MdColorsService)
export class App {
	constructor(private cs: MdColorsService) { }

	changePrimaryColor() {
		this.cs.primaryColor = "#ffd54f";
	}
}
