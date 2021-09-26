<script lang="ts" context="module">
	import type { Load } from "@sveltejs/kit";
	import { register, waitLocale } from "svelte-i18n";

	// Preload localisation for the questions into the page
	register("nl", () => import("@localisation/nl/questions.json"));
	register("en", () => import("@localisation/en/questions.json"));

	export const load: Load = async () =>
	{
		await waitLocale();
		return {};
	};
</script>

<slot/>