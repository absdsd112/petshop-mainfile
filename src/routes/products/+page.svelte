<script>
	import ProductList from '$lib/components/ProductList/ProductList.svelte';

	export let data;
	const products = data.props.products;
</script>

<ProductList {products} />

<style>
	:global(body) {
		background-color: beige;
	}
</style>