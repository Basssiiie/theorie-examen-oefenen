import type { LocalisedQuestionText } from "./LocalisedQuestionText";
import type { Question } from "./Question";


/**
 * Represents a question that is currently active within the game.
 */
export interface ActiveQuestion
{
	question: Question;
	localisation: LocalisedQuestionText;
	answer: number | null;
}