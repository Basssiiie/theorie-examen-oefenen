import type { QuestionBase, QuestionType } from "./QuestionBase";


/**
 * A question where the user selects one image from a set of multiple images.
 */
export interface MultipleImageQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: QuestionType.MultipleChoice;

	/**
	 * Index into the choices array to specify which one is the correct answer.
	 */
	correct: number;

	/**
	 * List of uri of all possible image choices.
	 */
	choices: string[];
}
