import { MdCollapsible } from "aurelia-materialize-bridge";
import { inject, TaskQueue } from "aurelia-framework";

@inject(TaskQueue)
export class App {
	constructor(private taskQueue: TaskQueue) { }

	collapsible: MdCollapsible;

	attached() {
		this.taskQueue.queueTask(() => this.collapsible.open());
	}
}
