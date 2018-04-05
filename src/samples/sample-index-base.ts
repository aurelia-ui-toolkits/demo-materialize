import { autoinject } from "aurelia-dependency-injection";
import { Router, RouterConfiguration, RouteConfig, NavigationInstruction, PipelineResult, activationStrategy } from "aurelia-router";
import { Subscription, EventAggregator } from "aurelia-event-aggregator";
import { Loader, useView, TaskQueue } from "aurelia-framework";
import { MdTabs } from "aurelia-materialize-bridge";
import { RouterView } from "aurelia-templating-router";
import { HttpClient } from "aurelia-fetch-client";
import { Settings } from "../settings";
import { GistService } from "../services/gist-service";

declare var __webpack_require__: { m: any };

@useView("../sample-template.html")
@autoinject
export class SampleIndexBase {
	constructor(private eventAggregator: EventAggregator, private gistService: GistService, private taskQueue: TaskQueue, private http: HttpClient,
		private settings: Settings) {
	}

	subscription: Subscription;

	tabs: Array<{ title: string, language: string, content: string, [x: string]: any; }> = [];
	mdTabs: MdTabs;
	childRouterView: any;
	title: string;
	fragment: string;

	attached() {
		this.subscription = this.eventAggregator.subscribe("router:navigation:complete", e => this.navigationComplete(e));
	}

	async navigationComplete(e: PipelineResult) {
		this.fragment = e.instruction.router.currentInstruction.fragment;
		let files = await this.gistService.getGistFiles(this.fragment);
		let fragmentParts = this.fragment.split("/");
		this.title = fragmentParts[fragmentParts.length - 2].replace("-", " ");
		this.tabs = [];
		this.tabs.push(...files.map(x => ({ title: x.fileName, language: x.language, filename: x.fileName, content: x.content })));
		setTimeout(() => {
			this.mdTabs.detached();
			this.mdTabs.attached();
		}, 100);
	}

	detached() {
		if (this.subscription) {
			this.subscription.dispose();
			this.subscription = null;
		}
	}

	getRouteConfig(name: string): RouteConfig {
		let title = name.replace(/-/g, " ");
		return { route: name, name, moduleId: `./${name}/app`, nav: true, title: title.charAt(0).toUpperCase() + title.slice(1).toLowerCase() };
	}

	async runGist() {
		let redirectUri = window.location.origin + "/?component=" + this.fragment;
		window.open(`https://github.com/login/oauth/authorize?client_id=${this.settings.githubClientId}&scope=gist&redirect_uri=${redirectUri}`);
	}
}
