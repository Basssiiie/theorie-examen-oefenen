import { resolve } from "path";
import preprocess from "svelte-preprocess";
import static_adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: static_adapter({
			pages: "build",
			assets: "build",
			fallback: null
		}),
		paths: {
			// set base url path to repo name for Github Pages
			//base: "/gratis-theorie-examen"
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		vite: {
			resolve: {
				alias: {
					"@components": resolve("./src/components"),
					"@localisation": resolve("./src/localisation"),
					"@services": resolve("./src/services"),
					"@utilities": resolve("./src/utilities"),
				}
			}
		}
	}
};

export default config;
