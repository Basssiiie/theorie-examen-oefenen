<script lang="ts">
	import A01 from "@components/vectors/A01.svelte";
	import type { SvelteComponent } from "svelte";

	interface Sign
	{
		component: typeof SvelteComponent;
		name: string;
		param: "number" | null;
		value?: number;
	};

	const signs: Sign[] = [
		{ component: A01, name: "A01 max-speed", param: "number" }
	];
</script>


<section>
	{#each signs as sign}
		<article class="sign">
			<svelte:component this={sign.component} value={sign.value} />
			<h1>{sign.name}</h1>
			{#if sign.param === "number"}
				<input bind:value={sign.value}
					min="0" max="130" step="10"
					type="number" inputmode="numeric" autocomplete="off" />
			{/if}
		</article>
	{/each}
</section>


<style>
	section {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	article * {
		display: block;
	}

	h1 {
		font-family: sans-serif;
		font-size: 24px;
		text-align: center;
		margin: 4px;
	}

	input {
		width: calc(100% - 8px); /* Minus padding+border */
	}

	.sign {
		border: 1px solid grey;
		border-radius: 5px;
		padding: 10px;
		margin: 10px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.sign :global(svg) {
		width: 100%;
		height: 100%;
	}

	.sign :global(text::selection) {
		background: none;
	}
</style>