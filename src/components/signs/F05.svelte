<script lang="ts">
	import { black, red, white } from "./_colours";
</script>


<svg width="300" height="300" viewBox="0 0 300 300">
	<!-- white circle with red border-->
	<circle cx="150" cy="150" r="130.5" fill={white} stroke={red} stroke-width="39" />

	<!-- red arrow-->
	<path fill={red} d="M 201,225 L 201,130 L 222,135
		C 227,137 232,134 229,129 L 196,82 C 193,78 190,78 187,82 L 154,129
		C 152,134 156,137 161,135 L 182,130 L 182,225 L 201,225" />

	<!-- black arrow-->
	<path fill={black} d="M 97,74 L 97,169 L 76,164
		C 70,162 66,164 69,170 L 102,217 C 105,221 107,221 110,217 L 143,170
		C 146,164 142,162 137,164 L 115,169 L 115,74 L 97,74" />
</svg>