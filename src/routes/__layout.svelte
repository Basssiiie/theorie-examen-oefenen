<script lang="ts" context="module">
	import * as i18n from "svelte-i18n";

	console.log(`[__layout.svelte] Init locale`);
	i18n.init({
		initialLocale: "nl",
		fallbackLocale: "en"
	});
</script>
<script lang="ts">
	import { locale, locales } from 'svelte-i18n'
</script>


<slot/>

<p>Taal:</p>

<select bind:value={$locale}>
	{#each $locales as locale}
		<option value={locale}>{locale}</option>
	{/each}
</select>


<style>
	:root
	{
  		background: #EEE;
	}
</style>