import * as i18n from "svelte-i18n";
import * as Random from "@utilities/Random";
import { Questions } from "./QuestionList";
import type { Question } from "./types/Question";
import type { QuestionGroup } from "./types/QuestionGroup";


i18n.register("en", () => import("@localisation/questions/en.json"));
i18n.register("nl", () => import("@localisation/questions/nl.json"));


/**
 * Gets the next question for the current round.
 */
export function nextQuestion(): Question
{
	const [groupId, question] = getRandomQuestion();

	const result = Object.assign({}, question);
	result.id = `${groupId}.${result.id}`; // append group id into question id.
	return result;
}


/**
 * Resets the used question categories.
 */
export function resetRound(): void
{
	questionsThisRound.clear();
}


/**
 * Resets all previously used questions.
 */
export function resetAllProgress(): void
{
	resetRound();
	questionsAllTime.clear();
}


// Key: group id, value: set of question id's that have been used.
const questionsAllTime = new Map<string, Set<string>>();

// Key: group id, value: used question id.
const questionsThisRound = new Map<string, string>();


function getRandomQuestion(): [string, Question]
{
	const availableCategories = Questions.filter(g => isQuestionGroupAvailable(g));
	if (availableCategories.length == 0)
		throw Error("Out of question categories!");

	const nextCategory = Random.take(availableCategories);

	const groupId = nextCategory.id;
	const availableQuestions = nextCategory.questions.filter(q => isQuestionAvailable(groupId, q));

	const question = Random.take(availableQuestions);
	markQuestionAsUsed(groupId, question);
	return [groupId, question];
}


function markQuestionAsUsed(groupId: string, question: Question): void
{
	// Mark used in all time.
	let usedQuestionsForGroup = questionsAllTime.get(groupId);
	if (!usedQuestionsForGroup)
	{
		usedQuestionsForGroup = new Set<string>();
		questionsAllTime.set(groupId, usedQuestionsForGroup);
	}
	usedQuestionsForGroup.add(question.id);

	// Mark used for this round.
	questionsThisRound.set(groupId, question.id);
}


function isQuestionGroupAvailable(group: QuestionGroup): boolean
{
	if (!questionsThisRound.has(group.id))
	{
		const previouslyUsedQuestions = questionsAllTime.get(group.id);
		return (!previouslyUsedQuestions || previouslyUsedQuestions.size < group.questions.length);
	}
	return false;
}


function isQuestionAvailable(groupId: string, question: Question): boolean
{
	const previouslyUsedQuestions = questionsAllTime.get(groupId);
	return (!previouslyUsedQuestions || !previouslyUsedQuestions.has(question.id));
}