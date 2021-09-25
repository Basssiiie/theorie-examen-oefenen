import type { QuestionBase } from "./QuestionBase";
import type { QuestionOptions } from "./QuestionOptions";
import type { QuestionType } from "./QuestionType";


/**
 * A question where the user selects one answer from a set of multiple choices.
 */
export interface MultipleChoiceQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: QuestionType.MultipleChoice;

	/**
	 * Index into the choices array to specify which one is the correct answer.
	 */
	correct: number;

	/**
	 * Specific options that can be set for this question.
	 */
	flags?: QuestionOptions;
}
