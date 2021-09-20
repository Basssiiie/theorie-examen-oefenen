<script lang="ts">
	import Game from "@components/Game.svelte";
	import { _ } from "svelte-i18n";
</script>


<svelte:head>
	<title>{$_("exams.endless")}</title>
</svelte:head>


<Game />