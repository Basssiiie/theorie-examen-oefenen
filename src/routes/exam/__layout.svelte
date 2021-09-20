<script lang="ts" context="module">
	import { register, waitLocale } from "svelte-i18n";

	register("nl", () => import("@localisation/questions/nl.json"));
	register("en", () => import("@localisation/questions/en.json"));
</script>

<script lang="ts">
	import { locale } from "svelte-i18n";
</script>


{#await waitLocale($locale)}
	<p>Loading ...</p>
{:then _}
	<slot/>
{/await}