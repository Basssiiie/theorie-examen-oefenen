import type { LocalisedQuestionText } from "./LocalisedQuestionText";
import type { Question } from "./Question";
import type { Image} from "@services/images/types/Image";


/**
 * Represents a question that is currently active within the game.
 */
export class ActiveQuestion
{
	answer: Question["correct"] | null = null;
	isCorrect: boolean | null = null;

	constructor(
		readonly question: Question,
		readonly localisation: LocalisedQuestionText,
		readonly image: Image | null)
	{
	}
}