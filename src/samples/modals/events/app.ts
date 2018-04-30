import { autoinject } from "aurelia-framework";
import { MdToastService, MdModal } from "aurelia-materialize-bridge";
import { Logger } from "../../../shared/logger";

@autoinject
export class Events {
	constructor(private toast: MdToastService) { }

	logger: Logger;
	modal: MdModal;

	agree(e) {
		this.toast.show("You agreed!", 4000);
	}

	disagree(e) {
		this.toast.show("You disagreed!", 4000);
	}

	onOpenStart(e) {
		this.logger.log("open start");
	}

	onOpenEnd(e) {
		this.logger.log("open end");
	}

	onCloseStart(e) {
		this.logger.log("close start");
	}

	onCloseEnd(e) {
		this.logger.log("close end");
	}

	openModal() {
		this.modal.open();
	}
}
