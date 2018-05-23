import { inject } from "aurelia-framework";
import { DialogService } from "aurelia-dialog";
import { Prompt } from "./prompt";

@inject(DialogService)
export class App {
	constructor(private dialogService: DialogService) { }

	openDialog() {
		this.dialogService.open({ viewModel: Prompt, model: "Good or Bad?", lock: false }).whenClosed(response => {
			if (!response.wasCancelled) {
				console.log("good");
			} else {
				console.log("bad");
			}
			console.log(response.output);
		});
	}
}
