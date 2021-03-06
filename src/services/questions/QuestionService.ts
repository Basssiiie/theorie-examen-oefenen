import * as Random from "@utilities/Random";
import { Questions } from "./QuestionList";
import type { CategoryKeys } from "./QuestionList";
import type { Question } from "./types/Question";


/**
 * Gets the next question for the current round.
 */
export function next(): Question
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


/** All available question categories. */
const questionCategories = <CategoryKeys[]>Object.keys(Questions);

/** Key: group id, value: set of question id's that have been used. */
const questionsAllTime = new Map<CategoryKeys, Set<string>>();

/** Key: group id, value: used question id. */
const questionsThisRound = new Map<CategoryKeys, string>();


function getRandomQuestion(): [CategoryKeys, Question]
{
	const availableCategories = questionCategories.filter(key => isQuestionGroupAvailable(key, Questions[key].length));
	if (availableCategories.length == 0)
	{
		console.log("Out of question categories! Reset the round...");
		resetRound();
		return getRandomQuestion();
	}

	const nextCategoryId = Random.take(availableCategories);
	const previouslyUsedQuestions = questionsAllTime.get(nextCategoryId);

	let availableQuestions = Questions[nextCategoryId];
	if (previouslyUsedQuestions && previouslyUsedQuestions.size > 0)
	{
		availableQuestions = availableQuestions.filter(q => !previouslyUsedQuestions.has(q.id));
	}

	const question = Random.take(availableQuestions);
	markQuestionAsUsed(nextCategoryId, question);

	return [nextCategoryId, question];
}


function markQuestionAsUsed(groupId: CategoryKeys, question: Question): void
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


function isQuestionGroupAvailable(groupId: CategoryKeys, questionCount: number): boolean
{
	if (!questionsThisRound.has(groupId))
	{
		const previouslyUsedQuestions = questionsAllTime.get(groupId);
		return (!previouslyUsedQuestions || previouslyUsedQuestions.size < questionCount);
	}
	return false;
}