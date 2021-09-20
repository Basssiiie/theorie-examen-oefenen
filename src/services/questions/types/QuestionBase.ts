import type { QuestionType } from "./QuestionType";

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
	 * The type of question.
	 */
	type: QuestionType;
}
