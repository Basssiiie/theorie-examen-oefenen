<script lang="ts">
	import type { ActiveQuestion } from "@services/questions/types/ActiveQuestion";
	import { _ } from "svelte-i18n";

	export let question: ActiveQuestion;

	let input: number | undefined;

	function onNewQuestion(question: ActiveQuestion): void
	{
		console.log(`On new question for number entry: ${question.question.id} (type: ${question.question.type})`);
		const value = question.answer;

		input = (value !== null && typeof value === "number")
			? value : undefined;
	}
	function onInput(input: number | undefined): void
	{
		console.log(`Number input set to: ${input} (type: ${typeof input})`);
		question.answer = (typeof input === "number") ? input : null;
	}
	function updateStyle(correct: ActiveQuestion["isCorrect"]): string | undefined
	{
		// Update the color of the input
		const value = correct;
		if (value === null)
			return undefined;

		console.log(`Update style to '${(value) ? "correct" : "incorrect"}'`);
		return (value) ? "correct" : "incorrect";
	}

	$: onNewQuestion(question);
	$: onInput(input);
	$: css = updateStyle(question.isCorrect);
</script>


<input bind:value={input} disabled={question.isCorrect !== null}
	id="answer" class={css} placeholder={$_("game.numberentry.placeholder")}
	min="0" type="number" inputmode="numeric" autocomplete="off" required />


<style>
	.correct
	{
		border-radius: 4px;
		border: 4px solid green;
	}

	.incorrect
	{
		border-radius: 4px;
		border: 4px solid red;
	}
</style>