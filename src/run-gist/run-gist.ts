import { autoinject, noView, Loader } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { Settings } from "../settings";
import { GistService } from "../services/gist-service";

declare var __webpack_require__: { m: any };

@autoinject
export class RunGist {
	constructor(private http: HttpClient, private settings: Settings, private loader: Loader, private gistService: GistService) { }

	async activate(params: { component: string, code: string }) {
		let azureUrl = `https://ambdemonew.azurewebsites.net/api/GetAccessToken?code=CfDJ8AAAAAAAAAAAAAAAAAAAAAAq3eRaXNRXX9czkWSb6jkM4TUCDT5pBApm_s56iiphtufPg0mqhLf21ZqpA8wsd_ibheTFuH25KV18WZpn0boTmUUWjpbedXri2XW3z96FREInDwwxQBQpPokIdFz277rQacMz8gECAl1zQIJznUTjh8LRmwyxkWnHyEj9RkWi9g&access_code=${params.code}&state=${this.settings.githubState}`;
		let response = await this.http.fetch(azureUrl, { method: "get", headers: { "Content-Type": "application/json", "Accept": "application/json" } });
		if (!response.ok) {
			return;
		}
		let tokenContent = await response.json();
		let files = await this.gistService.getGistFiles(params.component);
		let gist = {
			public: true,
			files: {}
		};
		files.forEach(x => gist.files[x.fileName] = { content: x.content });
		let gistResponse = await this.http.fetch("https://api.github.com/gists",
			{
				method: "post",
				body: JSON.stringify(gist),
				headers: { "Content-Type": "application/json", "Authorization": "token " + tokenContent.access_token }
			});
		let j = await gistResponse.json();
		window.location.replace(`https://gist.run/?id=${j.id}`);
	}
}
