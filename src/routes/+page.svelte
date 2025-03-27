<script>
	import ProductList from '$lib/components/ProductList/ProductList.svelte';
	import { t } from '$lib/i18n/i18n.js';

	export let data;
	const products = data.props.products;
	const besteller = products.filter((product) => product.tags.includes('bestseller'));
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
		<div class="text-3xl font-bold mb-8">{$t('home.reasons_title')}</div>
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
				<br />
					<br />
					<br />
					<br />
			</div>
		</div>
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
