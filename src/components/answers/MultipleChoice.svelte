<script lang="ts">
	import type { ActiveQuestion } from "@services/questions/types/ActiveQuestion";
	import { QuestionType } from "@services/questions/types/QuestionType";
	import { _ } from "svelte-i18n";

	export let question: ActiveQuestion;

	let choices = (question.question.type === QuestionType.YesNo)
		? [ $_("yes"), $_("no") ]
		: question.localisation.choices || [];
</script>


{#each choices as choice, idx}
	<input bind:group={question.answer} value={idx} id="answer{idx}" type="radio" name="answer" required>
	<label for="answer{idx}">{choice}</label>
{/each}