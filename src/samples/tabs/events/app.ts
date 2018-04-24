import { Logger } from "../../../shared/logger";
import { MdTabs } from "aurelia-materialize-bridge";

export class App {
	logger: Logger;

	onTabSelected(e) {
		this.logger.log(`tab selected ${e.detail}`);
	}

	onShow(newContent: Element) {
		this.logger.log(`onShow on element: ${newContent.getAttribute("id")}`);
	}
}
