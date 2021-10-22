import { minify } from "html-minifier-terser";
import type { Options } from "html-minifier-terser";
import { prerendering } from "$app/env";
import type { Handle } from "@sveltejs/kit";

const minifyOptions: Options =
{
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
};

/**
 * Minify the website's html and css during prerender.
 */
export const handle: Handle = async ({ request, resolve }) =>
{
	const response = await resolve(request);
	if (prerendering && response.headers["content-type"] === "text/html")
	{
		response.body = await minify(<string>response.body, minifyOptions);
	}
	return response;
};