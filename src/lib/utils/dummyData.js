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
		tags: ['bestseller']
	},
	{
		id: 2,
		handle: 'organic-puppy-food',
		title: {
			en: 'YARRAH Organic Puppy Food',
			de: 'YARRAH Bio-Katzenfutter',
			fr: 'Nourriture bio pour chiots YARRAH'
		},
		description: {
			en: 'Healthy organic cat food for your feline friends.',
			de: 'Gesundes Bio-Katzenfutter für Ihre Katzenfreunde.',
			fr: 'Nourriture bio saine pour vos amis félins.'
		},
		images: ['https://media.zooplus.com/bilder/6/400/17147_dog_dry_yarrah_puppy_2kg_8714265000317__6.jpg'],
		price: 20.0,
		currency: '€',
		tags: ['bestseller']
	},
	{
		id: 3,
		handle: 'organic-senior-dog-food',
		title: {
			en: 'Bosch Organic Senior Dog Food',
			de: 'Bosch Bio-Vogelfutter',
			fr: 'Nourriture bio pour chiens âgés Bosch'
		},
		description: {
			en: 'Nutritious organic bird seed for all bird species.',
			de: 'Nahrhaftes Bio-Vogelfutter für alle Vogelarten.',
			fr: 'Graines bio nutritives pour toutes les espèces d’oiseaux.'
		},
		images: ['https://media.zooplus.com/bilder/0/400/83827_pla_bosch_bio_senior_hundefutter_11_5kg_0.jpg'],
		price: 15.0,
		currency: '€',
		tags: []
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
		tags: ['grain-free']
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
		tags: ['high-protein']
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
		tags: ['starter-kit']
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
		tags: ['senior']
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
		tags: ['weight-control']
	},
	{
		id: 9,
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
		images: ['https://image.chewy.com/is/image/catalog/146478_MAIN._AC_SL600_V1632784354_.jpg'],
		price: 22.0,
		currency: '€',
		tags: ['organic']
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
		images: ['data:image/jpeg;base64,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'],
		price: 26.0,
		currency: '€',
		tags: ['grain-free']
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
		tags: ['high-protein']
	},
	{
		id: 12,
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
		images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPnWfPBQAdNTKXAvpaVTgn5qoJuvxZJ2H1Q&s'],
		price: 28.0,
		currency: '€',
		tags: ['senior']
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
		tags: ['weight-control']
	},
	{
		id: 14,
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
		images: ['https://m.media-amazon.com/images/I/71BZaq7GJcL._AC_UF1000,1000_QL80_.jpg'],
		price: 24.0,
		currency: '€',
		tags: ['indoor']
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
		tags: ['starter-kit']
	},
	{
		id: 16,
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
		tags: ['hairball-control']
	}
];

export default products;
