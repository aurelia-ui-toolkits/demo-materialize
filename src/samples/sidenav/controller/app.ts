import { MdSidenav } from "aurelia-materialize-bridge";

export class App {
	sideNav: MdSidenav;

	openSideNav() {
		this.sideNav.open();
	}
}
