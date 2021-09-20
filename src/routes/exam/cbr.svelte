<script lang="ts">
	import Game from "@components/Game.svelte";
	import { _ } from "svelte-i18n";
</script>


<svelte:head>
	<title>{$_("exams.cbr")}</title>
</svelte:head>


<Game numberOfQuestions={25} />