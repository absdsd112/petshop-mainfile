<script>
	import { t, locale } from '$lib/i18n/i18n.js';

	let notification = "";

	function handleSubmit(event) {
		event.preventDefault();
		notification = $t('about.notification');
		setTimeout(() => {
			notification = "";
		}, 5000); // Clear notification after 5 seconds
	}
</script>

<section class="about-content p-6 space-y-10" style="background-color: beige;">
	<!-- Our History Section -->
	<div class="bg-[#A2D5C6] p-6 rounded-lg">
		<div class="flex flex-col md:flex-row items-center">
			<img src="https://cdn.britannica.com/24/234624-050-576DF6D2/Australian-shepherd-dog.jpg" alt="Dog" class="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6">
			<div>
				<h2 class="text-2xl font-bold text-center md:text-left mb-4">{$t('about.history.title')}</h2>
				<p class="text-lg leading-relaxed">{$t('about.history.content')}</p>
			</div>
		</div>
	</div>

	<!-- Our Values Section -->
	<div class="bg-[#A2D5C6] p-6 rounded-lg">
		<h2 class="text-2xl font-bold text-center mb-6">{$t('about.values.title')}</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
			<div class="space-y-4">
				<div class="flex items-center space-x-4">
					<span class="text-4xl">🌱</span>
					<p class="text-lg font-medium">{$t('about.values.organic')}</p>
				</div>
				<div class="flex items-center space-x-4">
					<span class="text-4xl">🍖</span>
					<p class="text-lg font-medium">{$t('about.values.flavor')}</p>
				</div>
				<div class="flex items-center space-x-4">
					<span class="text-4xl">🏭</span>
					<p class="text-lg font-medium">{$t('about.values.local')}</p>
				</div>
				<div class="flex items-center space-x-4">
					<span class="text-4xl">🥩</span>
					<p class="text-lg font-medium">{$t('about.values.meat')}</p>
				</div>
			</div>
			<img src="/cat.png" alt="Cat" class="w-full md:w-2/3 rounded-lg">
		</div>
	</div>

	<!-- Join Club Section -->
	<div class="bg-yellow-100 p-6 rounded-lg text-center">
		<h2 class="text-2xl font-bold mb-4">{$t('about.club.title')}</h2>
		<form on:submit={handleSubmit} class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<input type="email" placeholder="you@example.com" class="p-2 border rounded-md w-full md:w-auto">
			<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">{$t('about.club.button')}</button>
		</form>
		{#if notification}
			<div class="mt-4 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-lg animate-bounce">
				{notification}
			</div>
		{/if}
	</div>
</section>



