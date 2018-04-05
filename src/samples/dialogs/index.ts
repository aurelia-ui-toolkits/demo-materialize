import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig } from "aurelia-router";
import { EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { SampleIndexBase } from "../sample-index-base";
import { HttpClient } from "aurelia-fetch-client";
import { Settings } from "../../settings";
import { GistService } from "../../services/gist-service";

@useView("../sample-template.html")
@autoinject
export class Index extends SampleIndexBase {
	constructor(eventAggregator: EventAggregator, gistService: GistService, taskQueue: TaskQueue, http: HttpClient, settings: Settings) {
		super(eventAggregator, gistService, taskQueue, http, settings);
	}

	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		const routes: RouteConfig[] = [
			{ route: "", redirect: "toast" },
			super.getRouteConfig("toast"),
			super.getRouteConfig("tooltip"),
			super.getRouteConfig("tooltip-html"),
		];
		config.map(routes);
		this.router = router;
	}
}
