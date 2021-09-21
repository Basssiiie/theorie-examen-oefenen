import type { QuestionBase } from "./QuestionBase";
import type { QuestionType } from "./QuestionType";


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
export const YesNoAnswer =
{
	Yes: 1,
	No: 2,
};
export type YesNoAnswer = number;