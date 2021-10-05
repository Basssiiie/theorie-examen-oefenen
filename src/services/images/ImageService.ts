import type { ImageKeys } from "./ImageList";
import { Images } from "./ImageList";
import type { Image } from "./types/Image";


/**
 * Get the specified image from the image library.
 */
export function get(key: ImageKeys | { key: ImageKeys }): Image
{
	const actualKey = (typeof key === "string") ? key : key.key;

	const image = Images[actualKey];
	if (!image)
		throw Error(`Image with key '${actualKey || key}' not found in image library.`);

	return image;
}