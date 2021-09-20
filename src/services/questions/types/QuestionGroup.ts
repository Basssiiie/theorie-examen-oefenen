import type { Question } from "./Question";


/**
 * A group of similar questions or questions about the same subject but phrased slightly different.
 */
export interface QuestionGroup
{
	/**
	 * Id of this set of questions, used for localisation.
	 */
	id: string;

	/**
	 * The available questions within this group.
	 */
	questions: Question[];
}