import { autoinject, Loader } from "aurelia-framework";
import { IFile } from "./i-file";

declare var __webpack_require__: { m: any };

@autoinject
export class GistService {
	constructor(private loader: Loader) { }

	async getGistFiles(fragment: string): Promise<IFile[]> {
		let fragmentParts = fragment.split("/");
		let modules: string[] = Object.keys(__webpack_require__.m).filter(x => x.startsWith(fragment.substring(1) + "/") && x.endsWith(".raw"));
		modules.push("samples/gist/index.html.raw");
		modules.push("samples/gist/configure.ts.raw");
		let files: IFile[] = [];
		for (let m of modules) {
			let pathParts = m.split("/");
			let fileName = pathParts[pathParts.length - 1].replace(".raw", "");
			let fileNameParts = fileName.split(".");
			let language: string;
			switch (fileNameParts[1]) {
				default:
				case "html":
					language = "html";
					break;
				case "js":
					language = "javascript";
					break;
				case "ts":
					language = "typescript";
					break;
				case "css":
					language = "css";
					break;
				case "md":
					language = "markdown";
					break;
			}
			fileName = fileName === "index.html" ? fileName : `src\\${fileName}`;
			files.push({ fileName, language, content: await this.loader.loadText(m) });
		}
		return files;
	}
}
