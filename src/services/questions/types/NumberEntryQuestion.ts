import type { QuestionBase } from "./QuestionBase";


/**
 * Question where the user enters a number as an answer.
 */
export interface NumberEntryQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: "number";

	/**
	 * The number that is the answer to the question.
	 */
	correct: number;
}
