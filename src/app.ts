import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration } from "aurelia-router";
import { Settings } from "./settings";

@autoinject
export class App {
	constructor(settings: Settings) {
		this.primaryColor = settings.primaryColor;
		this.accentColor = settings.accentColor;
		this.errorColor = settings.errorColor;
		this.successColor = settings.successColor;
	}

	primaryColor: string;
	accentColor: string;
	successColor: string;
	errorColor: string;
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "Aurelia Materialize Components";
		config.map([
			{ name: "about", route: ["", "about"], moduleId: "about/about", title: "About" },
			{ name: "support", route: "help/support", moduleId: "help/support", title: "Support" },
			{ name: "samples", route: "samples", moduleId: "samples/index", title: "Components" },
			{ name: "run-gist", route: "run-gist", moduleId: "run-gist/run-gist", title: "Run Gist" }
		]);

		this.router = router;
	}
}
