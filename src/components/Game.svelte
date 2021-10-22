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

<div class="top">
	<h1 class="top-text">{$_("question")} {questionIndex + 1}{numberOfQuestions ? ` / ${numberOfQuestions}` : ''}</h1>
</div>

<form bind:this={form} on:submit|preventDefault={goNext} autocomplete="off" class="game">
	<div class="flex-parent">
		{#if $active.image}
			<div class="flex-child picture box">
				{#if $active.image.type === "source"}
					<img src={$active.image.filepath} alt={$_(`images.${$active.question.image}.alt`)} />
				{:else if $active.image.type === "component"}
					<svelte:component this={$active.image.component} {...((typeof $active.question.image === "object" && $active.question.image.params) ? $active.question.image.params : undefined)} />
				{/if}
			</div>
		{/if}

		<div class="flex-child">
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
		</div>
	</div>

	<div class="bottom">
		<button on:click={goPrevious} disabled={questionIndex <= 0} type="button" class="bottom-button">{$_("previous")}</button>
		<button type="submit" class="bottom-button button-next">{$_("next")}</button>
	</div>
</form>



<style>
	.top, .bottom
	{
		color: white;
		background-color: rgb(27, 55, 177);
		box-shadow: 0px 1px 4px gray;
		height: 60px;
	}

	.top
	{
		padding: 0px 25px;
	}

	.top-text
	{
		line-height: 60px;
		margin: 0px;
	}

	.bottom
	{
		display: flex;
		gap: 15px;
		justify-content: space-between;
		position: relative;
		z-index: 1;
	}

	.bottom-button
	{
		border: 0;
		background-color: rgb(74, 97, 199);
		color: white;
		cursor: pointer;
		font-size: 1.3em;
		line-height: 60px;
		margin: 0px;
		max-width: 200px;
		padding: 0px;
		text-align: center;
		width: 100%;
	}

	.bottom-button:hover
	{
		background-color: rgb(106, 123, 199);
	}

	.bottom-button:active
	{
		background-color: rgb(122, 137, 202);
	}

	.bottom-button:disabled
	{
		background-color: rgb(59, 79, 164);
		color: #ccc;
		cursor: not-allowed;
	}

	.game
	{
		height: calc(100% - 120px);
	}

	.flex-parent
	{
		display:flex;
 		flex-wrap:wrap;
		height: 100%;
	}

	.flex-child
	{
		flex: 300px;
		margin: auto;
		max-width: 800px;
	}

	.box
	{
		background-color: white;
		box-shadow: 1px 1px 1px gray;
		margin: 10px;
		padding: 10px;
	}

	.picture
	{
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		padding: 25px;
		height: 350px;
	}

	.picture :global(*)
	{
		width: 100%;
	}

	.text
	{
		display: block;
		margin: 3px 5px;
	}
</style>