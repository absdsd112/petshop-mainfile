import React from 'react';
import ProductCard from './ProductCard';
import products from '../lib/utils/dummyData';

function ProductList() {
	console.log(products); // Log the products array to verify the data
	return (
		<div className="product-list">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductList;
