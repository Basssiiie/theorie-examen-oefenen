<script lang="ts">
	export let value: string | number;
</script>


<svg width="300" height="300" viewBox="0 0 300 300">
	<!-- white circle with red border-->
	<circle
		cx="150" cy="150" r="130.5"
		fill="#f1f0ea" stroke="#bb1e10" stroke-width="39" />

	<text
		x="150" y="160"
		text-anchor="middle" dominant-baseline="middle"
		font-family="Arial" font-size="135" font-weight="bold" fill="black"
		textLength={(value && value.toString().length > 2) ? 200 : undefined} lengthAdjust="spacingAndGlyphs">
		{value ?? "?"}
	</text>
</svg>