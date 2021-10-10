import nl from "@localisation/nl/questions.json";
import { addMessages, init, json } from "svelte-i18n";
import { get } from 'svelte/store';
import { CategoryKeys, Questions } from "./QuestionList";
import type { LocalisedQuestionText } from "./types/LocalisedQuestionText";


/**
 * Performs a callback for all questions in the question list.
 */
function forAllQuestionKeys(callback: (key: string) => void): void
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

/**
 * Performs a callback for all questions in the specified localisation.
 */
function forAllLocalisedKeys(locals: Record<string, unknown>, callback: (key: string) => void): void
{
	function recursive(node: Record<string, unknown>, parents?: string): void
	{
		if ("question" in node)
		{
			if (parents)
			{
				callback(parents);
			}
			return;
		}
		for (const key in node)
		{
			if (key === "empty")
				continue;

			recursive(node[key] as Record<string, unknown>, (parents) ? `${parents}.${key}` : key);
		}
	}
	recursive(locals);
}


describe("Question list", () =>
{
	test("All keys are unique", () =>
	{
		const map = new Map<string, number>();
		const duplicates: string[] = [];

		forAllQuestionKeys(key =>
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

		const missing: string[] = [];
		forAllQuestionKeys(key =>
		{
			const locals: LocalisedQuestionText | undefined = get(json)(key);

			if (!locals || !locals.question)
				missing.push(key);
		});

		expect(missing).toEqual([]);
	});


	test("All Dutch localised questions are used", () =>
	{
		const keys = new Set<string>();
		forAllQuestionKeys(key => keys.add(key));

		const missing: string[] = [];
		forAllLocalisedKeys(nl, local =>
		{
			if (!keys.has(local))
				missing.push(local);
		});

		expect(missing).toEqual([]);
	});
});
