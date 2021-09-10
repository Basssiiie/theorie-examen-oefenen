<script lang="ts" context="module">
	import * as i18n from "svelte-i18n";

	console.log(`[__layout.svelte] Init locale`);
	i18n.init({
		initialLocale: "nl",
		fallbackLocale: "en"
	});
</script>

<slot/>

<style>
	:root
	{
  		background: #EEE;
	}
</style>