import type { QuestionBase } from "./QuestionBase";


/**
 * Question where the user chooses yes or no as the answer to the question.
 */
export interface YesNoQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: "yesno";

	/**
	 * The correct answer to the question.
	 */
	correct: YesNoAnswer;
}


/**
 * Whether the user answer yes or no.
 */
export type YesNoAnswer = "yes" | "no";