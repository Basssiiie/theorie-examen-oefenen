import type { SvelteComponent } from "svelte";


/**
 * An image that loads as a Svelte component.
 */
export interface ImageComponent
{
	/**
	 * Indicates this image is a Svelte component.
	 */
	type: "component";

	/**
	 * The Svelte component to load for this image.
	 */
	component: typeof SvelteComponent;
}