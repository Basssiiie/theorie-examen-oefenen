<script lang="ts">
	import A01 from "@components/signs/A01.svelte";
	import F05 from "@components/signs/F05.svelte";
	import F06 from "@components/signs/F06.svelte";
	import G01 from "@components/signs/G01.svelte";
	import G03 from "@components/signs/G03.svelte";
	import type { SvelteComponent } from "svelte";

	interface Sign
	{
		component: typeof SvelteComponent;
		name: string;
		description: string;
		param?: "number" | null;
		value?: number;
	};

	// From: https://wetten.overheid.nl/BWBR0004825/2021-07-01/#Bijlage1
	const signs: Sign[] = [
		{ component: A01, name: "A01", description: "Maximumsnelheid", param: "number" },
		{ component: F05, name: "F05", description: "Verbod voor bestuurders door te gaan bij nadering van verkeer uit tegengestelde richting" },
		{ component: F06, name: "F06", description: "Bestuurders uit tegengestelde richting moeten verkeer dat van deze richting nadert voor laten gaan" },
		{ component: G01, name: "G01", description: "Autosnelweg" },
		{ component: G03, name: "G03", description: "Autoweg" },
	];

	let scale = 50;
	$: size = (scale / 100) * 300;
</script>


<section>
	<label class="scaler">
		Sign scale: <input bind:value={scale} class="scaler-input" min="25" max="500" type="number" inputmode="numeric" autocomplete="off" /> %
		<input bind:value={scale} class="scaler-range" min="25" max="500" type="range" />
	</label>
</section>

<section class="flexbox">
	{#each signs as sign}
		<div class="sign" style="max-width:{size + 30}px">
			<figure>
				<div class="sign-image" style="height:{size}px">
					<svelte:component this={sign.component} value={sign.value} />
				</div>
				<figcaption>
					<h1 class="sign-name">{sign.name}</h1>
					<span class="sign-desc">{sign.description}</span>
				</figcaption>
			</figure>
			{#if sign.param === "number"}
				<input bind:value={sign.value} class="sign-edit-number" min="0" max="130" step="10" type="number" inputmode="numeric" autocomplete="off" />
			{/if}
		</div>
	{/each}
</section>


<style>
	.scaler
	{
		max-width: 400px;
		width: 100%;
	}

	.scaler-input
	{
		width: 50px;
	}

	.scaler-range
	{
		display: block;
		max-width: 400px;
		width: 100%;
	}

	.flexbox
	{
		align-items: center;
		display: flex;
		flex-wrap: wrap;
	}

	.sign
	{
		border: 1px solid grey;
		border-radius: 5px;
		height: 100%;
		margin: 15px;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.sign figure
	{
		margin: 0px;
	}

	.sign-image
	{
		box-sizing: border-box;
		padding: 15px;
		width: 100%;
	}

	.sign-name
	{
		font-family: sans-serif;
		font-size: 20px;
		margin: 6px;
		text-align: center;
	}

	.sign-desc
	{
		display: block;
		font-size: 0.7em;
		line-height: 1.5em;
		margin: 0px 4px;
		text-align: center;
	}

	.sign-edit-number
	{
		display: block;
		margin: 8px auto 15px auto;
		max-width: 75px;
		width: calc(100% - 8px); /* Minus padding+border */
	}

	.sign :global(svg)
	{
		height: 100%;
		width: 100%;
	}

	.sign :global(text::selection)
	{
		background: none;
	}
</style>