import { Logger } from "../../../shared/logger";
import { MdTabs } from "aurelia-materialize-bridge";

export class App {
	logger: Logger;

	onTabSelected(e) {
		this.logger.log(`tab selected ${e.detail}`);
	}

	onShow(element) {
		this.logger.log(`onShow on element: ${element.attr("id")}`);
	}
}
