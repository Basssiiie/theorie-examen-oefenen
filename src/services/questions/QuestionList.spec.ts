import { Questions} from "./QuestionList";


describe("Question list", () =>
{
	test("All keys are unique", () =>
	{
		const map = new Map<string, number>();
		const duplicates: string[] = [];

		for (const categoryId in Questions)
		{
			const questionsIds = Questions[categoryId].map(q => q.id);
			for (const id in questionsIds)
			{
				const key = `${categoryId}.${id}`;
				const count = (map.get(key) || 0);

				map.set(key, count + 1);

				if (count > 1 && !duplicates.includes(key))
					duplicates.push(key);
			}
		}

		expect(duplicates).toEqual([]);
	});
});
