import './ProductCard.css'; // Import the CSS file

function ProductCard({ product }) {
	return (
		<div className="product-card">
			<h2>{product.title.en}</h2>
			<p>{product.description.en}</p>
			<ul>
				{/* Render the benefits list */}
				{product.benefits.map((benefit, index) => (
					<li key={index}>
						<span>{benefit.icon}</span> {benefit.text}
					</li>
				))}
			</ul>
			<p>Weight: {product.weight}</p>
			<p>Loyalty Points: {product.loyaltyPoints}</p>
			<p>{product.shippingInfo}</p>
			{/* Render the call-to-action section */}
			<button>{product.callToAction.buttonText}</button>
			<p>{product.callToAction.inStock}</p>
			<label>{product.callToAction.quantityLabel}</label>
		</div>
	);
}

export default ProductCard;
