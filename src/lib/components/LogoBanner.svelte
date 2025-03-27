<script>
	export let logoSrc = "/LOGO.svg";
	export let altText = "Company Logo";
	import { locale, locales } from '$lib/i18n/i18n.js';
</script>

<div class="bg-amber-100 bg-grey flex justify-center items-center py-4 relative">
	<img src={logoSrc} alt={altText} class="h-50 w-auto" />
	<!-- Language Button -->
	<div class="absolute top-0 left-1 py-2 pr-2 flex space-x-2">
		{#each locales as l}
			<button
				class="px-3 py-1 rounded-full border-2 {l === $locale ? 'bg-white text-black' : 'bg-black text-white'} hover:bg-gray-700 transition"
				on:click={() => (locale.set(l))}
			>
				{l.toUpperCase()}
			</button>
		{/each}
	</div>
</div>
