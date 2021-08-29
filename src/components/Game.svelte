<script lang="ts">
	export let numberOfGames: number | null = null;

	let currentGame = 1;

</script>


<section>
	<h1>Vraag {currentGame}{numberOfGames ? `/${numberOfGames}` : ''}</h1>
	<div class="picture">
		Afbeelding
	</div>

	<div class="question">
		<p>Vraag</p>
	</div>

	<div class="choices">
		<p>Antwoorden</p>
	</div>


</section>



<style>
	.picture, .question, .choices
	{
		border: 2px solid blue;
		padding: 10px;

	}
</style>