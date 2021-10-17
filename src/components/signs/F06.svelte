<script lang="ts">
	import { blue, red, white } from "./_colours";
</script>

<svg width="300" height="300" viewBox="0 0 300 300">
	<!-- blue area -->
	<rect width="300" height="300" rx="10" fill={blue}  />

	<!-- white edge-->
	<path style="fill:none;stroke:{white};stroke-width:6.8" d="M 276,292
		C 285,292 292,285 292,276 L 292,24 C 292,15 285,8 276,8 L 24,8
		C 15,8 8,15 8,24 L 8,276 C 8,285 15,292 24,292 L 276,292 z" />

	<!-- white arrow-->
	<path fill={white} d="M 224,255 L 224,118 L 255,125
		C 263,128 269,124 264,117 L 217,48 C 213,42 209,42 205,48 L 157,117
		C 153,124 159,128 166,125 L 197,118 L 197,255 L 224,255" />

	<!-- red arrow-->
	<path fill={red} d="M 76,45 L 76,183 L 45,175
		C 38,172 32,176 36,184 L 84,252 C 88,258 92,258 96,252 L 143,184
		C 148,176 142,172 134,175 L 103,183 L 103,45 L 76,45" />
</svg>