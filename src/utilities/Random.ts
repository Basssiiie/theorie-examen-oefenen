/**
 * Gets a random integer in between the minimum (inclusive) and the maximum (exclusive).
 */
export function integer(minimum: number, maximum: number): number
{
	return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

/**
 * Gets a random integer in between the minimum (inclusive) and the maximum (exclusive).
 */
export function take<T>(array: T[]): T
{
	const index = integer(0, array.length);
	return array[index];
}