const products = [
	{
		id: 1,
		handle: 'organic-dog-food',
		title: {
			en: 'HIGH MEAT WILD PRAIRIE Organic Dog Food',
			de: 'HIGH MEAT WILD PRAIRIE Bio-Hundefutter',
			fr: 'Nourriture bio pour chiens HIGH MEAT WILD PRAIRIE'
		},
		description: {
			en: 'Premium organic dog food made with natural ingredients.',
			de: 'Premium Bio-Hundefutter aus natürlichen Zutaten.',
			fr: 'Nourriture bio premium pour chiens, fabriquée avec des ingrédients naturels.'
		},
		images: ['https://www.naturedog.fr/34040-large_default/croquettes-high-meat-wild-prairie-grain-free-12kg.jpg'],
		price: 25.0,
		currency: '€',
		tags: ['bestseller'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for dogs' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 25,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €25,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 2,
		handle: 'organic-puppy-food',
		title: {
			en: 'YARRAH Organic Puppy Food',
			de: 'YARRAH Bio-Hundefutter',
			fr: 'Nourriture bio pour chiots YARRAH'
		},
		description: {
			en: 'Premium organic puppy food made with natural ingredients.',
			de: 'Premium Bio-Hundefutter aus natürlichen Zutaten.',
			fr: 'Nourriture bio premium pour chiots, fabriquée avec des ingrédients naturels.'
		},
		images: ['https://media.zooplus.com/bilder/6/400/17147_dog_dry_yarrah_puppy_2kg_8714265000317__6.jpg'],
		price: 20.0,
		currency: '€',
		tags: ['bestseller'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for puppies' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 20,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €20,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 3,
		handle: 'organic-senior-dog-food',
		title: {
			en: 'Bosch Organic Senior Dog Food',
			de: 'Bosch Bio-Hundefutter für Senioren',
			fr: 'Nourriture bio pour chiens âgés Bosch'
		},
		description: {
			en: 'Premium organic senior dog food made with natural ingredients.',
			de: 'Premium Bio-Hundefutter für Senioren aus natürlichen Zutaten.',
			fr: 'Nourriture bio premium pour chiens âgés, fabriquée avec des ingrédients naturels.'
		},
		images: ['https://media.zooplus.com/bilder/0/400/83827_pla_bosch_bio_senior_hundefutter_11_5kg_0.jpg'],
		price: 15.0,
		currency: '€',
		tags: [],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for senior dogs' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '11.5 kg',
		loyaltyPoints: 15,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €15,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 4,
		handle: 'grain-free-dog-food',
		title: {
			en: 'Nature Recipe Grain-Free Dog Food',
			de: 'Nature Recipe Getreidefreies Hundefutter',
			fr: 'Nature Recipe Nourriture sans céréales pour chiens'
		},
		description: {
			en: 'Delicious grain-free dog food for sensitive stomachs.',
			de: 'Leckeres getreidefreies Hundefutter für empfindliche Mägen.',
			fr: 'Délicieuse nourriture sans céréales pour chiens aux estomacs sensibles.'
		},
		images: ['https://i5.walmartimages.com/seo/Nature-s-Recipe-Grain-Free-Chicken-Sweet-Potato-Pumpkin-Recipe-Dry-Dog-Food-24-lb-Bag_9701a2d5-aa30-491e-a11f-d95d481a0e84.3144d8ac0f4af002675a9eadb79e4d84.jpeg'],
		price: 30.0,
		currency: '€',
		tags: ['grain-free'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for dogs' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 30,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €30,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 5,
		handle: 'high-protein-dog-food',
		title: {
			en: 'Only natural pet High-Protein Dog Food',
			de: 'Only natural pet Proteinreiches Hundefutter',
			fr: 'Nourriture riche en protéines pour chiens Only natural pet'
		},
		description: {
			en: 'High-protein dog food for active and energetic dogs.',
			de: 'Proteinreiches Hundefutter für aktive und energiegeladene Hunde.',
			fr: 'Nourriture riche en protéines pour chiens actifs et énergiques.'
		},
		images: ['https://s7d2.scene7.com/is/image/PetSmart/5330284'],
		price: 35.0,
		currency: '€',
		tags: ['high-protein'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for dogs' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 35,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €35,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 6,
		handle: 'puppy-starter-kit',
		title: {
			en: 'Harrington Puppy Starter Kit',
			de: 'Harrington Welpen-Starterpaket',
			fr: 'Kit de démarrage pour chiots Harrington'
		},
		description: {
			en: 'A complete starter kit for your new puppy.',
			de: 'Ein komplettes Starterpaket für Ihren neuen Welpen.',
			fr: 'Un kit de démarrage complet pour votre nouveau chiot.'
		},
		images: ['https://cdn.petsathome.com/public/images/products/900_36948_08.jpg'],
		price: 50.0,
		currency: '€',
		tags: ['starter-kit'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for puppies' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 50,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €50,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 7,
		handle: 'senior-dog-health',
		title: {
			en: 'Wellness Senior Dog Health Food',
			de: 'Wellness Senioren-Hundefutter',
			fr: 'Nourriture santé pour chiens âgés Wellness'
		},
		description: {
			en: 'Specially formulated food for senior dogs.',
			de: 'Speziell formuliertes Futter für ältere Hunde.',
			fr: 'Nourriture spécialement formulée pour chiens âgés.'
		},
		images: ['https://shop.bensonspet.com/cdn/shop/files/ac4f40840547a5cfbffbc6886cc0e41c97fbdd02.jpg?v=1710955550'],
		price: 28.0,
		currency: '€',
		tags: ['senior'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for senior dogs' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 28,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €28,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 8,
		handle: 'weight-control-dog-food',
		title: {
			en: 'Earthborn Weight Control Dog Food',
			de: 'Earthborn Gewichtskontroll-Hundefutter',
			fr: 'Nourriture pour chiens pour le contrôle du poids Earthborn'
		},
		description: {
			en: 'Helps maintain a healthy weight for your dog.',
			de: 'Hilft, ein gesundes Gewicht für Ihren Hund zu halten.',
			fr: 'Aide à maintenir un poids santé pour votre chien.'
		},
		images: ['https://www.cheshirehorse.com/dw/image/v2/BFXN_PRD/on/demandware.static/-/Sites-master-cheshirehorse/default/dwa0256b03/images/products/054799.jpg?sw=650&sh=650'],
		price: 27.0,
		currency: '€',
		tags: ['weight-control'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for dogs' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 27,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €27,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 9,
		handle: 'indoor-cat-food',
		title: {
			en: 'Nutro Indoor Cat Food',
			de: 'Nutro Katzenfutter für Wohnungskatzen',
			fr: 'Nourriture pour chats d’intérieur Nutro'
		},
		description: {
			en: 'Specially designed for indoor cats.',
			de: 'Speziell für Wohnungskatzen entwickelt.',
			fr: 'Conçu spécialement pour les chats d’intérieur.'
		},
		images: ['https://www.nutro.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf2471/files/migrate-product-files/images/joos142vpztg66ev14c6.png'],
		price: 24.0,
		currency: '€',
		tags: ['indoor'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for indoor cats' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 24,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €24,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 10,
		handle: 'grain-free-cat-food',
		title: {
			en: 'YARRAH Grain-Free Cat Food',
			de: 'YARRAH Getreidefreies Katzenfutter',
			fr: 'Nourriture sans céréales pour chats YARRAH '
		},
		description: {
			en: 'Delicious grain-free food for cats with sensitive stomachs.',
			de: 'Leckeres getreidefreies Futter für Katzen mit empfindlichem Magen.',
			fr: 'Délicieuse nourriture sans céréales pour chats aux estomacs sensibles.'
		},
		images: ['https://www.dogteur.com/media/catalog/product/cache/e28e11a0ab875bd6c5a23bb7e2f6325a/y/a/yarrah-bio-croquettes-au-poulet-et-poisson-sans-ce_re_ales-_grain-free_-pour-chat-2_4-kg_2_2.jpg'],
		price: 26.0,
		currency: '€',
		tags: ['grain-free'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for cats' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 26,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €26,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 11,
		handle: 'high-protein-cat-food',
		title: {
			en: 'Scrumbles High-Protein Cat Food',
			de: 'Scrumbles Proteinreiches Katzenfutter',
			fr: 'Nourriture riche en protéines pour chats Scrumbles'
		},
		description: {
			en: 'High-protein food for active and energetic cats.',
			de: 'Proteinreiches Futter für aktive und energiegeladene Katzen.',
			fr: 'Nourriture riche en protéines pour chats actifs et énergiques.'
		},
		images: ['https://scrumbles.co.uk/cdn/shop/files/chicken-dry-cat-fooddry-cat-foodscrumbles-natural-pet-foodcac10-931741.jpg?v=1720002077&width=500'],
		price: 30.0,
		currency: '€',
		tags: ['high-protein'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for cats' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 30,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €30,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 12,
		handle: 'hairball-control-cat-food',
		title: {
			en: 'Purrfect Bistro Hairball Control Cat Food',
			de: 'Purrfect Bistro Haarballenkontroll-Katzenfutter',
			fr: 'Nourriture pour chats anti-boules de poils Purrfect Bistro'
		},
		description: {
			en: 'Helps reduce hairballs in cats.',
			de: 'Hilft, Haarballen bei Katzen zu reduzieren.',
			fr: 'Aide à réduire les boules de poils chez les chats.'
		},
		images: ['https://cdn11.bigcommerce.com/s-xfu1s3ki5p/images/stencil/1280x1280/products/10945/1398/134274152-1__10136.1631551764.jpg?c=1'],
		price: 29.0,
		currency: '€',
		tags: ['hairball-control'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for cats' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 29,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €29,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 13,
		handle: 'weight-control-cat-food',
		title: {
			en: 'Optimeal Weight Control Cat Food',
			de: 'Optimeal Gewichtskontroll-Katzenfutter',
			fr: 'Nourriture pour chats pour le contrôle du poids Optimeal'
		},
		description: {
			en: 'Helps maintain a healthy weight for your cat.',
			de: 'Hilft, ein gesundes Gewicht für Ihre Katze zu halten.',
			fr: 'Aide à maintenir un poids santé pour votre chat.'
		},
		images: ['https://m.media-amazon.com/images/I/81cjeJFWxUL.jpg'],
		price: 25.0,
		currency: '€',
		tags: ['weight-control'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for cats' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 25,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €25,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 14,
		handle: 'organic-kitten-food',
		title: {
			en: 'Organix Organic Kitten Food',
			de: 'Organix Bio-Kittenfutter',
			fr: 'Nourriture bio pour chatons Organix'
		},
		description: {
			en: 'Premium organic food for growing kittens.',
			de: 'Premium Bio-Futter für wachsende Kätzchen.',
			fr: 'Nourriture bio premium pour chatons en croissance.'
		},
		images: ['https://m.media-amazon.com/images/I/81imFSI3WSL._AC_UF1000,1000_QL80_.jpg'],
		price: 22.0,
		currency: '€',
		tags: ['organic'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for kittens' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 22,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €22,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 15,
		handle: 'kitten-starter-kit',
		title: {
			en: 'Nature range Kitten Starter Kit',
			de: 'Nature range Kitten-Starterpaket',
			fr: 'Kit de démarrage pour chatons Nature range'
		},
		description: {
			en: 'A complete starter kit for your new kitten.',
			de: 'Ein komplettes Starterpaket für Ihr neues Kätzchen.',
			fr: 'Un kit de démarrage complet pour votre nouveau chaton.'
		},
		images: ['https://www.shop.thepethealthclub.co.uk/cdn/shop/products/natures-range-kitten-chk.png?v=1654690217'],
		price: 45.0,
		currency: '€',
		tags: ['starter-kit'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for kittens' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 45,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €45,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
	{
		id: 16,
		handle: 'senior-cat-health',
		title: {
			en: 'IAMS Senior Cat Health Food',
			de: 'IAMS Senioren-Katzenfutter',
			fr: 'Nourriture santé pour chats âgés IAMS'
		},
		description: {
			en: 'Specially formulated food for senior cats.',
			de: 'Speziell formuliertes Futter für ältere Katzen.',
			fr: 'Nourriture spécialement formulée pour chats âgés.'
		},
		images: ['https://www.petsense.com/cdn/shop/products/38399-1452192221_c09c48c6-4ae4-4312-b0f2-c34da7c61252.jpg?v=1739292384'],
		price: 28.0,
		currency: '€',
		tags: ['senior'],
		benefits: [
			{ icon: '🌱', text: '100% natural & organic ingredients' },
			{ icon: '🥩', text: 'High meat content for better digestion' },
			{ icon: '🐕', text: 'Perfectly suited for senior cats' },
			{ icon: '🌿', text: 'Grain-free & no artificial additives' }
		],
		weight: '12 kg',
		loyaltyPoints: 28,
		shippingInfo: '🚚 Free delivery from €49 | Secure payment',
		callToAction: {
			buttonText: '🛒 Add to Cart €28,00',
			inStock: '✅ In stock',
			quantityLabel: 'Quantity'
		}
	},
];

export default products;
