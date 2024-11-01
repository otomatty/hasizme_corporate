import path from "node:path";
import { defineConfig } from "@farmfe/core";
import postcss from "@farmfe/js-plugin-postcss";
import farmJsPluginSvgr from "@farmfe/js-plugin-svgr";

export default defineConfig({
	plugins: [
		[
			"@farmfe/plugin-react",
			{
				runtime: "automatic",
			},
		],
		postcss(),
		farmJsPluginSvgr(),
	],
	compilation: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
			extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".d.ts"], // 拡張子の解決順序を指定
		},
	},
});
