<script lang="ts">
	import type { ActiveQuestion } from "@services/questions/types/ActiveQuestion";
	import { _ } from "svelte-i18n";

	export let question: ActiveQuestion;
</script>


<input bind:value={question.answer} id="answer" type="number" min="0" placeholder={$_("game.numberentry.placeholder")} inputmode="numeric" autocomplete="off" required>