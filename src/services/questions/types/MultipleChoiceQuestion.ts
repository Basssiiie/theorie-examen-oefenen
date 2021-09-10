import type { QuestionBase, QuestionType } from "./QuestionBase";


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
	 * List of all possible answer choices.
	 */
	choices: string[];
}
