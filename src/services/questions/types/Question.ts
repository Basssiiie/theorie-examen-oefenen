import type { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import type { MultipleImageQuestion } from "./MultipleImageQuestion";
import type { NumberEntryQuestion } from "./NumberEntryQuestion";
import type { YesNoQuestion } from "./YesNoQuestion";


/**
 * Union of all possible questions.
 */
export type Question
	= MultipleChoiceQuestion
	| MultipleImageQuestion
	| YesNoQuestion
	| NumberEntryQuestion;
