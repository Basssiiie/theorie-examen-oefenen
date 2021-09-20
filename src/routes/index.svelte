<script lang="ts">
	import { _ } from "svelte-i18n";
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>


<section>
	<h1>
		{$_("intro.title")}
	</h1>

	<ul>
		<li>
			<a href="/exam/cbr">{$_("exams.cbr")}</a>
		</li>
		<li>
			<a href="/exam/endless">{$_("exams.endless")}</a>
		</li>
	</ul>
</section>



<style>
</style>
