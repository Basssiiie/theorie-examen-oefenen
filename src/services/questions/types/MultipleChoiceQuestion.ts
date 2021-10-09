import type { QuestionBase } from "./QuestionBase";
import type { ChoiceOptions } from "./ChoiceOptions";


/**
 * A question where the user selects one answer from a set of multiple choices.
 */
export interface MultipleChoiceQuestion extends QuestionBase
{
	/** @inheritdoc */
	type: "choices";

	/**
	 * Index into the choices array to specify which one is the correct answer.
	 */
	correct: number;

	/**
	 * Specifies if the choices should be reordered in a specific way.
	 */
	reorder?: ChoiceOptions;
}
