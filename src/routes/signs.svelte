<script lang="ts">
	import A01 from "@components/signs/A01.svelte";
	import G01 from "@components/signs/G01.svelte";
	import G03 from "@components/signs/G03.svelte";
	import type { SvelteComponent } from "svelte";

	interface Sign
	{
		component: typeof SvelteComponent;
		name: string;
		param?: "number" | null;
		value?: number;
	};

	const signs: Sign[] = [
		{ component: A01, name: "A01 max-speed", param: "number" },
		{ component: G01, name: "G01 autosnelweg" },
		{ component: G03, name: "G03 autoweg" },
	];

	let scale = 100;
</script>


<section>
	<label class="scaler">
		Sign scale: <input bind:value={scale} class="scaler-input" min="50" max="500" type="number" inputmode="numeric" autocomplete="off" /> %
		<input bind:value={scale} class="scaler-range" min="50" max="500" type="range" />
	</label>
</section>

<section class="flexbox">
	{#each signs as sign}
		<article class="sign">
			<div class="sign-image" style="height:{(scale / 100) * 300}px">
				<svelte:component this={sign.component} value={sign.value} />
			</div>
			<h1 class="sign-name">{sign.name}</h1>
			{#if sign.param === "number"}
				<input bind:value={sign.value} class="sign-edit-number" min="0" max="130" step="10" type="number" inputmode="numeric" autocomplete="off" />
			{/if}
		</article>
	{/each}
</section>


<style>
	.scaler {
		max-width: 400px;
		width: 100%;
	}

	.scaler-input {
		width: 50px;
	}

	.scaler-range {
		display: block;
		max-width: 400px;
		width: 100%;
	}

	.flexbox {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.sign-name {
		font-family: sans-serif;
		font-size: 20px;
		text-align: center;
		margin: 6px;
	}

	.sign-edit-number {
		width: calc(100% - 8px); /* Minus padding+border */
		max-width: 75px;
		margin: auto;
	}

	.sign {
		border: 1px solid grey;
		border-radius: 5px;
		padding: 15px;
		margin: 15px;
   		height: 100%;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.sign * {
		display: block;
	}

	.sign :global(svg) {
		width: 100%;
		height: 100%;
	}

	.sign :global(text::selection) {
		background: none;
	}
</style>