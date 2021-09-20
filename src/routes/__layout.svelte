<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";
	import { init, register, waitLocale } from "svelte-i18n";

	// Init standard localisation
	console.log(`[__layout.svelte] Init locale`);
	register("nl", () => import("@localisation/website/nl.json"));
	register("en", () => import("@localisation/website/en.json"));

	init({
		initialLocale: "nl",
		fallbackLocale: "nl"
	});

	// Preload all localisation into the page
	export const load: Load = async () =>
	{
		await waitLocale();
		return {};
	}
</script>
<script lang="ts">
	import { locale, locales, _ } from "svelte-i18n"
</script>


<slot/>

<p>
	{$_("language")}:
	<select bind:value={$locale}>
		{#each $locales as locale}
			<option value={locale}>{locale}</option>
		{/each}
	</select>
</p>


<style>
	:root
	{
  		background: #EEE;
	}
</style>