
/**
 * An image that can be loaded.
 */
export interface ImageSource
{
	/**
	 * Indicates this image is a source file.
	 */
	type: "source";

	/**
	 * The file path to the image.
	 */
	filepath: string;
}