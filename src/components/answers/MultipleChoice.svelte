<script lang="ts">
	import type { ActiveQuestion } from "@services/questions/types/ActiveQuestion";
	import { _ } from "svelte-i18n";

	export let question: ActiveQuestion;

	$: choices = (question.question.type === "yesno")
		? [ $_("yes"), $_("no") ]
		: question.localisation.choices || [];
</script>


{#each choices as choice, idx}
	<label>
		<input bind:group={question.answer} value={idx} id="answer{idx}" type="radio" name="answer" required>
		{choice}
	</label>
{/each}


<style>
	label
	{
		display: block;
		padding: 0.2em;
	}

	label:hover
	{
		background: rgba(0, 0, 0, 0.1)
	}
</style>