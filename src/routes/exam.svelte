<script lang="ts">
	import QuestionLoader from "@components/QuestionLoader.svelte";
	import Game from "@components/Game.svelte"
</script>


<QuestionLoader>
	<Game numberOfGames={25} />
</QuestionLoader>