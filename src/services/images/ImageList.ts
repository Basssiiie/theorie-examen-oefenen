import A01 from "@components/vectors/A01.svelte";
import type { Image } from "./types/Image";
import type { ImageType } from "./types/ImageType";


const source: ImageType = "source";
const component: ImageType = "component";

const images =
{
	A01: { type: component, component: A01 },
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
