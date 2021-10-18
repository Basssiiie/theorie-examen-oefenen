import * as Random from "@utilities/Random";

describe("Random", () =>
{
	test.each([
		[ 0, 15 ],
		[ 5, 7 ],
		[ 9, 10 ],
		[ -15, 4 ],
		[ -33, -21 ]
	])("integer is uniformly distributed", (min, max) =>
	{
		const map: Record<number, number> = {};
		for (let i = 0; i < 500; i++)
		{
			const value = Random.integer(min, max);
			map[value] = (map[value] || 0) + 1;
		}

		for (let j = min; j < max; j++)
		{
			expect(map[j]).toBeGreaterThan(3);
			delete map[j];
		}
		expect(Object.keys(map)).toEqual([]);
	});


	test("take is uniformly distributed", () =>
	{
		const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p" ];
		const map: Record<string, number> = {};
		for (let i = 0; i < 500; i++)
		{
			const value = Random.take(alphabet);
			map[value] = (map[value] || 0) + 1;
		}

		for (let j = 0; j < alphabet.length; j++)
		{
			const letter = alphabet[j];
			expect(map[letter]).toBeGreaterThan(2);
			delete map[letter];
		}
		expect(Object.keys(map)).toEqual([]);
	});
});