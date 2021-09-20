import type { QuestionBase } from "./QuestionBase";
import type { QuestionType } from "./QuestionType";


/**
 * Question where the user enters a number as an answer.
 */
export interface NumberEntryQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: QuestionType.NumberEntry;

	/**
	 * The number that is the answer to the question.
	 */
	correct: number;
}
