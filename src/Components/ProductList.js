import React from 'react';
import ProductCard from './ProductCard';
import products from '../lib/utils/dummyData';

function ProductList() {
	return (
		<div className="product-list">
			{/* Map over the products array and render a ProductCard for each product */}
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductList;
