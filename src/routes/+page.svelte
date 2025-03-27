<script>
	import ProductList from '$lib/components/ProductList/ProductList.svelte';
	import { t } from '$lib/i18n/i18n.js';

	export let data;
	const products = data.props.products;
	const besteller = products.filter((product) => product.tags.includes('bestseller'));
	let notification = "";

function handleSubmit(event) {
  event.preventDefault();
  notification = "Thanks for joining our Furry Fresh Club. We will have exclusive offers for your furry friend!";
  setTimeout(() => {
	notification = "";
  }, 5000); // Clear notification after 5 seconds
}
</script>

<div class="text-center bg-beige">
	<div
		class="p-40 text-4xl w-screen text-white font-snack tracking-wider bg-blue-400"
		style="background-image: url('https://cdn0.animalwised.com/en/posts/8/1/7/5_tips_to_help_a_cat_and_a_dog_live_together_and_get_along_718_orig.jpg'); background-size: cover; background-position: center;"
	>
		<div class="bg-gray-800 bg-opacity-20 p-4 inline-block rounded">
			Love Starts with Fresh healthy Food
			<br />
			<br />
			and Grows with Every Moment Together
		</div>
	</div>
	<div class="pt-8">
		<div class="bg-dark-beige p-4 rounded">
			<div class="text-4xl">{$t('home.bestseller_title')}</div>
		</div>
		<ProductList products={besteller} />
	</div>
	<div class="pt-16">
		<div class="bg-dark-beige p-4 rounded">
		<div class="text-4xl font-bold">{$t('home.reasons_title')}</div>
	</div>
	<br />
	<br />
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="text-center">
				<div class="text-container">
					<img src="/meat.png" alt="Meat Icon" class="mx-auto mb-4" />
					<div class="font-bold text-2xl">{$t('home.reasons.meat_title')}</div>
					<br />
					<p class="text-lg">{$t('home.reasons.meat_description')}</p>
				</div>
			</div>
			<div class="text-center">
				<div class="text-container">
					<img src="/factory.png" alt="Factory Icon" class="mx-auto mb-4" />
					<div class="font-bold text-2xl">{$t('home.reasons.local_title')}</div>
					<br />
					<p class="text-lg">{$t('home.reasons.local_description')}</p>
				</div>
			</div>
			<div class="text-center">
				<div class="text-container">
					<img src="/Happy-dog.png" alt="Dog Icon" class="mx-auto mb-4" />
					<div class="font-bold text-2xl">{$t('home.reasons.flavour_title')}</div>
					<br />
					<p class="text-lg">{$t('home.reasons.flavour_description')}</p>
				</div>
			</div>
			<div class="text-center">
				<div class="text-container">
					<img src="/leaf.png" alt="Leaf Icon" class="mx-auto mb-4" />
					<div class="font-bold text-2xl">{$t('home.reasons.organic_title')}</div>
					<br />
					<p class="text-lg">{$t('home.reasons.organic_description')}</p>
					
				</div>
				
			</div>
			<br />
			<br />
			<br />
		</div>
		<!-- Join Club Section -->
		<div class="bg-yellow-100 p-6 rounded-lg text-center">
			<h2 class="text-2xl font-bold mb-4">Join our Furry Fresh Club and make new friends!!</h2>
			<form on:submit={handleSubmit} class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			  <input type="email" placeholder="you@example.com" class="p-2 border rounded-md w-full md:w-auto">
			  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Join Now</button>
			</form>
			{#if notification}
			  <div class="mt-4 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-lg animate-bounce">
				{notification}
			  </div>
			{/if}
		  </div>
		  <br />
		  <br />
	</div>
</div>

<style>
	.bg-beige {
		background-color: beige;
	}
	.bg-dark-beige {
		background-color: #d2b48c; /* Slightly darker beige */
	}
	.text-container {
		width: 400px; /* Shortened width */
		height: 400px; /* Make it square */
		padding: 1rem;
		border: 1px solid #e0e0e0; /* Softer border color */
		border-radius: 16px; /* More rounded corners */
		background: #d2b48c; /* Dark beige background */
		box-shadow: 4px 4px 8px #b89b7a, -4px -4px 8px #f0d6b0; /* Adjusted shadow for dark beige */
		margin: 0 auto; /* Center the container */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-family: 'Arial', sans-serif; /* Professional font */
		text-align: center; /* Center text alignment */
	}
</style>
