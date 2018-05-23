import { DialogController } from "aurelia-dialog";
import { inject } from "aurelia-framework";

@inject(DialogController)
export class Prompt {
	constructor(private controller: DialogController) {
		controller.settings.lock = false;
		controller.settings.centerHorizontalOnly = true;
	}
}
