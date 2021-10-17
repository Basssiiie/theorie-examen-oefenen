import A01 from "@components/signs/A01.svelte";
import F05 from "@components/signs/F05.svelte";
import F06 from "@components/signs/F06.svelte";
import G01 from "@components/signs/G01.svelte";
import G03 from "@components/signs/G03.svelte";
import type { Image } from "./types/Image";
import type { ImageType } from "./types/ImageType";


const source: ImageType = "source";
const component: ImageType = "component";

const images =
{
	A01: { type: component, component: A01 },
	F05: { type: component, component: F05 },
	F06: { type: component, component: F06 },
	G01: { type: component, component: G01 },
	G03: { type: component, component: G03 },
	test: { type: source, filepath: "test.png" }
};


/**
 * Union of all available images in the library.
 */
export type ImageKeys = (keyof typeof images);


/**
 * List of images that can be used by questions.
 */
export const Images: Record<ImageKeys, Image> = images;
