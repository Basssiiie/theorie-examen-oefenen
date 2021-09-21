<script lang="ts">
	import * as QuestionService from "@services/questions/QuestionService";
	import type { LocalisedQuestionText } from "@services/questions/types/LocalisedQuestionText";
	import type { Question } from "@services/questions/types/Question";
	import { QuestionType } from "@services/questions/types/QuestionType";
	import { _, json, locale } from "svelte-i18n";

	export let numberOfQuestions: number | null = null;

	console.log(`[Game.svelte] Init game in language: ${$locale}`);
	QuestionService.resetAllProgress();

	interface ActiveQuestion
	{
		question: Question;
		localisation: LocalisedQuestionText;
		answer: number | null;
	}

	const questions: ActiveQuestion[] = [];
	let questionIndex = 0;
	let current: ActiveQuestion;
	let form: HTMLFormElement;

	function update(): void
	{
		if (questionIndex < questions.length)
		{
			current = questions[questionIndex];
		}
		else
		{
			const question = QuestionService.nextQuestion();
			console.log(`New question: ${question.id}`);

			current = {
				question: question,
				localisation: $json(question.id),
				answer: null
			};
			questions.push(current);
		}
	}
	function goNext(): void
	{
		if (form.checkValidity())
		{
			questionIndex++;
			update();
		}
	}
	function goPrevious(): void
	{
		if (questionIndex > 0)
		{
			questionIndex--;
			update();
		}
	}
	update();
</script>


<section>
	<h1>{$_("question")} {questionIndex + 1}{numberOfQuestions ? ` / ${numberOfQuestions}` : ''}</h1>

	<form bind:this={form} on:submit|preventDefault={goNext} autocomplete="off">
		<div class="picture">
			Afbeelding
		</div>

		<div class="question">
			<label for="answer">{current.localisation.question}</label>
		</div>

		<div class="choices">
			{#if current.question.type == QuestionType.NumberEntry}
				<input bind:value={current.answer} id="answer" type="number" min="0" placeholder={$_("game.numberentry.placeholder")} inputmode="numeric" autocomplete="off" required>
			{:else}
				<p>Error: unknown entry type.</p>
			{/if}
		</div>

		<button on:click={goPrevious} disabled={questionIndex <= 0} type="button">{$_("previous")}</button>
		<button type="submit">{$_("next")}</button>
	</form>

</section>


<style>
	.picture, .question, .choices
	{
		border: 2px solid blue;
		padding: 10px;

	}
</style>