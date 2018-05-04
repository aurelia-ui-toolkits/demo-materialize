import { autoinject, customAttribute, inject } from "aurelia-framework";

@customAttribute("blur-on-enter")
// cannot use autoinject with JSPM and in-browser transpilation
// https://github.com/aurelia/dependency-injection/issues/77#issuecomment-272420929
@inject(Element)
export class BlurOnEnter {
	constructor(private element: Element) {
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	attached() {
		this.element.addEventListener("keyup", this.handleKeyUp);
	}

	detached() {
		this.element.removeEventListener("keyup", this.handleKeyUp);
	}

	handleKeyUp(e) {
		if (e.keyCode === 13) {
			(this.element as HTMLElement).blur();
		}
	}
}
