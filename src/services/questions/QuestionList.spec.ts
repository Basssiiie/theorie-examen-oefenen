import nl from "@localisation/nl/questions.json";
import { addMessages, init, json } from "svelte-i18n";
import { get } from 'svelte/store';
import { CategoryKeys, Questions } from "./QuestionList";
import type { LocalisedQuestionText } from "./types/LocalisedQuestionText";


/**
 * Performs a callback for all questions in the question list.
 */
function forAllKeys(callback: (key: string) => void): void
{
	for (const categoryId in Questions)
	{
		const questionsIds = Questions[<CategoryKeys>categoryId].map(q => q.id);
		for (const id of questionsIds)
		{
			callback(`${categoryId}.${id}`);
		}
	}
}


describe("Question list", () =>
{
	test("All keys are unique", () =>
	{
		const map = new Map<string, number>();
		const duplicates: string[] = [];

		forAllKeys(key =>
		{
			const count = (map.get(key) || 0);
			map.set(key, count + 1);

			if (count >= 1 && !duplicates.includes(key))
				duplicates.push(key);
		});

		expect(map.has("begrip.verkeer.geleider.paard")).toBe(true);
		expect(map.size).toBeGreaterThan(10);
		expect(duplicates).toEqual([]);
	});


	test("All keys have Dutch localisation", () =>
	{
		addMessages("nl", nl);
		init({ initialLocale: "nl", fallbackLocale: "nl" });

		const missing: unknown[] = [];

		forAllKeys(key =>
		{
			const locals: LocalisedQuestionText | undefined = get(json)(key);

			if (!locals || !locals.question)
				missing.push(key);
		});

		expect(missing).toEqual([]);
	});
});
