<script lang="ts">
	import * as QuestionService from "@services/questions/QuestionService";
	import * as ImageService from "@services/images/ImageService";
	import { ActiveQuestion } from "@services/questions/types/ActiveQuestion";
	import type { LocalisedQuestionText } from "@services/questions/types/LocalisedQuestionText";
	import MultipleChoice from "./answers/MultipleChoice.svelte";
	import NumberEntry from "./answers/NumberEntry.svelte";
	import { writable } from "svelte/store";
	import { _, json } from "svelte-i18n";

	export let numberOfQuestions: number | null = null;

	QuestionService.resetAllProgress();

	const questions: ActiveQuestion[] = [];
	const active = writable<ActiveQuestion>();
	let questionIndex = 0;
	let form: HTMLFormElement;

	function update(): void
	{
		if (questionIndex < questions.length)
		{
			$active = questions[questionIndex];
		}
		else
		{
			const question = QuestionService.next();
			const image = (question.image) ? ImageService.get(question.image) : null;
			const localisation: LocalisedQuestionText = $json(question.id);

			console.log(`New question: ${question.id}`);

			if (!localisation)
				throw Error(`Missing localisation for '${question.id}'`);

			const current = new ActiveQuestion(question, localisation, image);
			questions.push(current);
			$active = current;
		}
	}
	function goNext(): void
	{
		if (!form.checkValidity())
			return;

		if ($active.isCorrect === null)
		{
			$active.isCorrect = ($active.question.correct === $active.answer);
			console.log(`Is correct: ${$active.isCorrect}`);
			return;
		}

		questionIndex++;
		update();
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
		{#if $active.image}
			<div class="picture box">
				{#if $active.image.type === "source"}
					<img src={$active.image.filepath} alt={$_(`images.${$active.question.image}.alt`)} />
				{:else if $active.image.type === "component"}
					<svelte:component this={$active.image.component} {...((typeof $active.question.image === "object" && $active.question.image.params) ? $active.question.image.params : undefined)} />
				{/if}
			</div>
		{/if}

		<div class="question box">
			<label for="answer" class="text">
				{$active.localisation.question}
			</label>
		</div>

		<div class="choices box">
			{#if $active.question.type === "choices" || $active.question.type === "yesno"}
				<MultipleChoice question={$active} />
			{:else if $active.question.type === "number"}
				<NumberEntry question={$active} />
			{/if}
		</div>

		{#if $active.isCorrect !== null}
			<div class="reason box">
				<p class="text">{$active.localisation.why || ""}</p>
			</div>
		{/if}

		<button on:click={goPrevious} disabled={questionIndex <= 0} type="button">{$_("previous")}</button>
		<button type="submit">{$_("next")}</button>
	</form>

</section>


<style>
	.box
	{
		outline: blue solid 1px;
		margin: 10px;
		padding: 10px;
	}

	.text
	{
		display: block;
		margin: 5px;
	}
</style>