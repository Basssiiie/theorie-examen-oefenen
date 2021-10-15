import type { ImageKeys } from "@services/images/ImageList";

/**
 * Base information for a question.
 */
export interface QuestionBase
{
	/**
	 * The id of the question, used for localisation.
	 */
	id: string;

	/**
	 * Optional image from the image library, to be displayed alongside the question.
	 */
	image?: ImageKeys | QuestionImage;
}


/**
 * Information about an optional image.
 */
export interface QuestionImage
{
	/**
	 * The key for the image from the image library.
	 */
	key: ImageKeys;

	/**
	 * Optional additional parameters for the image.
	 */
	params?: unknown;
}