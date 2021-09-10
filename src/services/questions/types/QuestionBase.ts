/**
 * Base information for a question.
 */
export interface QuestionBase
{
	/**
	 * The id of the question.
	 */
	id: string;

	/**
	 * The type of question.
	 */
	type: QuestionType;
}


/**
 * Enumeration of possible question types.
 */
export const enum QuestionType
{
	MultipleChoice = 1,
	MultipleImages = 2,
	YesNo = 3,
	NumberEntry = 4,
}
