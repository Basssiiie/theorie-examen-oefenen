<script lang="ts">
	import * as QuestionService from "@services/questions/QuestionService";
	import type { LocalisedQuestionText } from "@services/questions/types/LocalisedQuestionText";
	import type { Question } from "@services/questions/types/Question";
	import { _, json, locale } from "svelte-i18n"

	export let numberOfQuestions: number | null = null;

	console.log(`[Game.svelte] Init game in language: ${$locale}`);
	QuestionService.resetAllProgress();

	let questionCount = 0;
	let question: Question;
	let localisation: LocalisedQuestionText;

	function getNext()
	{
		questionCount++;
		question = QuestionService.nextQuestion();
		localisation = $json(question.id);
		console.log(`[Game.svelte] Question: ${question.id} -> ${JSON.stringify(localisation)}`);
	}
	getNext();
</script>

<section>
	<h1>Vraag {questionCount}{numberOfQuestions ? `/${numberOfQuestions}` : ''}</h1>
	<div class="picture">
		Afbeelding
	</div>

	<div class="question">
		<p>{localisation?.question}</p>
	</div>

	<div class="choices">
		<p>Antwoorden</p>
	</div>

	<button on:click={getNext}>Volgende</button>

	<p>Taal: {$locale}</p>

</section>



<style>
	.picture, .question, .choices
	{
		border: 2px solid blue;
		padding: 10px;

	}
</style>