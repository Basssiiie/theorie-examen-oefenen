<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";
	import { init, register, waitLocale } from "svelte-i18n";

	// Init standard localisation
	console.log(`[__layout.svelte] Init locale`);
	register("nl", () => import("@localisation/nl/website.json"));
	register("en", () => import("@localisation/en/website.json"));

	init({
		initialLocale: "nl",
		fallbackLocale: "nl"
	});

	// Preload all localisation into the page
	export const load: Load = async () =>
	{
		await waitLocale();
		return {};
	};
</script>
<script lang="ts">
	import { locale, locales, _ } from "svelte-i18n";
</script>


<slot/>

<label class="language">
	{$_("language")}:
	<select bind:value={$locale}>
		{#each $locales as locale}
			<option value={locale}>{locale}</option>
		{/each}
	</select>
</label>


<style>
	:root
	{
  		background: #EEE;
		color: #333;
		font-family: Arial, Helvetica, sans-serif;
		letter-spacing: .03em;
		line-height: 1.5em;
	}

	.language
	{
		display: block;
		margin: 16px 0px;
	}
</style>