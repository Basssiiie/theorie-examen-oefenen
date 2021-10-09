/**
 * Extra flags to set for the specific question.
 *
 *  * `randomize`: reorders the choices randomly.
 *  * `reverse`: 50% chance to reverse the order.
 *  * `group:<entries>`: reorder choice groups randomly.
 */
export type ChoiceOptions = "randomize" | "reverse" | `group:${string}`;