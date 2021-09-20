<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";
	import { register, waitLocale } from "svelte-i18n";

	// Preload localisation for the questions into the page
	register("nl", () => import("@localisation/questions/nl.json"));
	register("en", () => import("@localisation/questions/en.json"));

	export const load: Load = async () =>
	{
		await waitLocale();
		return {};
	}
</script>

<slot/>