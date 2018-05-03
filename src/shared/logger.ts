import { customElement } from "aurelia-framework";

@customElement("logger")
export class Logger {
	container: HTMLDivElement;

	log(message: string, isError?: boolean, container?: Element) {
		let div = document.createElement("div");
		div.style.marginTop = "-24";
		div.style.backgroundColor = isError ? "#ffbbbb" : "#b2ebf2";
		div.textContent = message;
		this.container.insertBefore(div, this.container.firstChild);
	}

	error(message: string) {
		this.log(message, true);
	}
}
