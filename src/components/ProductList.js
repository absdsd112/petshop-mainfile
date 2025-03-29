import React from 'react';
import ProductCard from './ProductCard';
import products from '../lib/utils/dummyData';

function ProductList() {
	console.log('Products array:', products); // Debug: Log the products array to verify it's being imported correctly

	return (
		<div className="product-list">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductList;
