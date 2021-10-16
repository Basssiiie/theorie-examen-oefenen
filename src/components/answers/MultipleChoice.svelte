<script lang="ts">
	import type { ActiveQuestion } from "@services/questions/types/ActiveQuestion";
	import { _ } from "svelte-i18n";

	export let question: ActiveQuestion;

	let choices: string[];
	let selectedIndex: number | undefined;
	let css: string | undefined;

	function onNewQuestion(question: ActiveQuestion): void
	{
		console.log(`On new question for multiple choice: ${question.question.id} (type: ${question.question.type})`);
		if (question.question.type === "yesno")
		{
			choices = [ $_("yes"), $_("no") ];
			switch (question.answer)
			{
				case "yes": selectedIndex = 0; break;
				case "no": selectedIndex = 1; break;
				default: selectedIndex = undefined; break;
			}
		}
		else
		{
			choices = question.localisation.choices || [];
			const answer = question.answer;
			selectedIndex = (typeof answer === "number") ? answer : undefined;
		}
	}
	function onInput(index: number | undefined): void
	{
		console.log(`Multiple choice set to index: ${index}`);

		if (index === undefined)
		{
			question.answer = null;
		}
		else if (question.question.type === "yesno")
		{
			// Yes/no uses strings as answers, instead of indices
			question.answer = ((index === 0) ? "yes" : "no");
		}
		else
		{
			question.answer = index;
		}
	}
	function updateStyle(correct: ActiveQuestion["isCorrect"]): number | undefined
	{
		// Update the color of the input
		const value = correct;//get(correct);
		if (value === null)
			return undefined;

		console.log(`Update style to '${(value) ? "correct" : "incorrect"}'`);
		css = (value) ? "correct" : "incorrect";
		return selectedIndex;
	}

	$: onNewQuestion(question);
	$: onInput(selectedIndex);
	$: correct = updateStyle(question.isCorrect);

</script>


{#each choices as choice, idx}
	<label class="choice {(idx === correct) ? css : undefined}">
		<input bind:group={selectedIndex} disabled={question.isCorrect !== null}
			value={idx} id="answer{idx}" type="radio" name="answer" required>
		{choice}
	</label>
{/each}


<style>
	.choice
	{
		display: block;
		padding: 0.2em;
	}

	.choice:hover
	{
		background: rgba(0, 0, 0, 0.1)
	}

	.correct, .incorrect
	{
		border-radius: 4px;
		border: 4px solid;
	}

	.correct
	{
		border-color: green;
	}

	.incorrect
	{
		border-color: red;
	}
</style>