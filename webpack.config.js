const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { AureliaPlugin, ModuleDependenciesPlugin, GlobDependenciesPlugin } = require("aurelia-webpack-plugin");
const bundleOutputDir = "./dist";
const WebpackDeletePlugin = require("webpack-delete-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

function copyToRawRecursive(dir) {
    fs.readdirSync(dir).forEach(it => {
        const itsPath = path.resolve(dir, it);
        const itsStat = fs.statSync(itsPath);

        if (itsStat.isDirectory()) {
            copyToRawRecursive(itsPath);
        } else if (dir !== "src/samples") {
            if ((itsPath.endsWith(".html") || itsPath.endsWith(".ts") || itsPath.endsWith(".css") || itsPath.endsWith(".md")) && !itsPath.endsWith("index.ts")) {
                fs.copyFileSync(itsPath, itsPath + ".raw");
            }
        }
    })
}

console.log("Creating raw files for code examples...");
copyToRawRecursive("src/samples");

module.exports = (env, argv) => {
    const isDevBuild = argv.mode !== "production";
    console.log(isDevBuild);
	const cssLoader = { loader: isDevBuild ? "css-loader" : "css-loader?minimize" };
    return [{
        entry: { "app": ["es6-promise/auto", "aurelia-bootstrapper"] },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["src", "node_modules"]
        },
        output: {
            path: path.resolve(bundleOutputDir),
            publicPath: "dist/",
            filename: "[name].[hash].js",
            chunkFilename: "[name].[chunkhash].js"
        },
        module: {
            rules: [{ test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?|$)/, loader: "url-loader?limit=1" },
                { test: /\.ts$/i, include: [/src/], use: "awesome-typescript-loader" },
                {
                    test: /\.html$/i,
                    use: { loader: "html-loader", options: { attrs: [ /* do not process images */ ] } }
                },
                { test: /\.json$/i, use: "json-loader" },
                { test: /\.md$/i, use: "null-loader" },
				{ test: /\.raw$/i, use: "raw-loader" },
				// { test: /\.css$/i, use: cssLoader },
				{ test: /\.css$/i, issuer: /\.html|empty-entry\.js$/i, use: cssLoader },
				{ test: /\.css$/i, issuer: [{ not: [{ test: /\.html$/i }] }], use: ["style-loader", cssLoader] }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all"
                    }
                }
            }
        },
        devtool: isDevBuild ? "source-map" : false,
        plugins: [
            new webpack.DefinePlugin({ IS_DEV_BUILD: JSON.stringify(isDevBuild) }),
            new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", "window.jQuery": "jquery" }),
			new AureliaPlugin({ aureliaApp: "main" }),
			new GlobDependenciesPlugin({ "app": ["src/**/*.{ts,html,raw}"] }),
			new HtmlWebpackPlugin({ template: 'index.ejs', filename: "../index.html", metadata: {}, alwaysWriteToDisk: true }),
			new HtmlWebpackHarddiskPlugin(),
            new WebpackDeletePlugin(["./src/**/*.raw"])
        ]
    }];
};
