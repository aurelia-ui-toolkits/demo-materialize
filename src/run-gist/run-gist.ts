import { autoinject, noView, Loader } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";
import { Settings } from "../settings";
import { GistService } from "../services/gist-service";

declare var __webpack_require__: { m: any };

@autoinject
export class RunGist {
	constructor(private http: HttpClient, private settings: Settings, private loader: Loader, private gistService: GistService) { }

	async activate(params: { component: string, code: string }) {
		let azureUrl = `https://ambdemo.azurewebsites.net/api/GetAccessToken?code=l6Gs2UXVlXSVyIqmtwIzrilaA37VgRaxSTr0ofMdH20eebN7dD1tJQ==&access_code=${params.code}&state=${this.settings.githubState}`;
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
