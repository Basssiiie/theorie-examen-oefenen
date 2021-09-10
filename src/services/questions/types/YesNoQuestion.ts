import type { QuestionBase, QuestionType } from "./QuestionBase";


/**
 * Question where the user chooses yes or no as the answer to the question.
 */
export interface YesNoQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: QuestionType.YesNo;

	/**
	 * The correct answer to the question.
	 */
	correct: YesNoAnswer;
}


/**
 * Whether the user answer yes or no.
 */
export const enum YesNoAnswer
{
	Yes = 1,
	No = 2,
}