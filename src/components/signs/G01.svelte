<script lang="ts">
	import { blue, white } from "./_colours";
</script>


<svg width="200" height="300" viewBox="0 0 200 300">
	<!-- blue area -->
	<rect width="200" height="300" rx="10" fill={blue} />

	<g fill={white}>
		<!-- left lane -->
		<path d="M 73,93 L 93,26 L 97,26 L 93,93 z" />
		<path d="M 90,128 L 81,271 L 20,271 L 62,128 z" />
		<!-- right lane -->
		<path d="M 127,93 L 107,26 L 103,26 L 107,93 z" />
		<path d="M 110,128 L 119,271 L 180,271 L 138,128 z" />
		<!-- overpass -->
		<path d="M 152,111 L 152,128 L 165,128 L 165,111
			L 180,111 L 180,102 L 20,102 L 20,111
			L 35,111 L 35,128 L 48,128 L 48,111 z" />
	</g>

	<!-- white edge -->
	<path style="fill:none;stroke:{white};stroke-width:6.8" d="M 176,292
		C 185,292 192,285 192,276 L 192,24 C 192,15 185,8 176,8 L 24,8
		C 15,8 8,15 8,24 L 8,276 C 8,285 15,292 24,292 L 176,292 z" />
</svg>