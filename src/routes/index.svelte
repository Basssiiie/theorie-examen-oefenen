<script lang="ts">
	import { base } from "$app/paths";
	import { _ } from "svelte-i18n";
</script>


<svelte:head>
	<title>{$_("intro.title")}</title>
</svelte:head>


<section>
	<h1>
		{$_("intro.title")}
	</h1>

	<ul>
		<li>
			<a href="{base}/exam/cbr">{$_("exams.cbr")}</a>
		</li>
		<li>
			<a href="{base}/exam/endless">{$_("exams.endless")}</a>
		</li>
	</ul>
</section>



<style>
</style>
