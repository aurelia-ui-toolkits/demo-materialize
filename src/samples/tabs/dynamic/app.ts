import { autoinject, TaskQueue } from "aurelia-framework";
import { MdTabs } from "aurelia-materialize-bridge";

@autoinject
export class App {
	constructor(private tq: TaskQueue) { }

	tabs = [
		{ id: 0, title: "tab 1", content: "content for tab 1" },
		{ id: 1, title: "tab 2", content: "content for tab 2" },
		{ id: 2, title: "tab 3", content: "content for tab 3" },
		{ id: 3, title: "tab 4", content: "content for tab 4" }
	];
	tabsVM: MdTabs;
	tabControl: HTMLUListElement;
	tabContents: HTMLDivElement;

	addTab() {
		const id = this.tabs.length;
		this.tabs.push({
			id, title: `tab ${id + 1}`, content: `content for tab ${id + 1}`
		});
		this.tabsVM.detached();
		this.tabsVM.attached();
	}
}
