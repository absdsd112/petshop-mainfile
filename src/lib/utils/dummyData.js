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
			en: `Premium organic dog food made with natural ingredients.
				Weight: 12 kg
				Loyalty Points: 25
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €25,00 | ✅ In stock | Quantity`,
			de: `Premium Bio-Hundefutter aus natürlichen Zutaten.
				Gewicht: 12 kg
				Treuepunkte: 25
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €25,00 | ✅ Auf Lager | Menge`,
			fr: `Nourriture bio premium pour chiens, fabriquée avec des ingrédients naturels.
				Poids: 12 kg
				Points de fidélité: 25
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €25,00 | ✅ En stock | Quantité`
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
		]
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
			en: `Premium organic puppy food made with natural ingredients.
				Weight: 12 kg
				Loyalty Points: 20
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €20,00 | ✅ In stock | Quantity`,
			de: `Premium Bio-Hundefutter aus natürlichen Zutaten.
				Gewicht: 12 kg
				Treuepunkte: 20
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €20,00 | ✅ Auf Lager | Menge`,
			fr: `Nourriture bio premium pour chiots, fabriquée avec des ingrédients naturels.
				Poids: 12 kg
				Points de fidélité: 20
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €20,00 | ✅ En stock | Quantité`
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
		]
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
			en: `Premium organic senior dog food made with natural ingredients.
				Weight: 11.5 kg
				Loyalty Points: 15
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €15,00 | ✅ In stock | Quantity`,
			de: `Premium Bio-Hundefutter für Senioren aus natürlichen Zutaten.
				Gewicht: 11.5 kg
				Treuepunkte: 15
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €15,00 | ✅ Auf Lager | Menge`,
			fr: `Nourriture bio premium pour chiens âgés, fabriquée avec des ingrédients naturels.
				Poids: 11.5 kg
				Points de fidélité: 15
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €15,00 | ✅ En stock | Quantité`
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
		]
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
			en: `Delicious grain-free dog food for sensitive stomachs.
				Weight: 12 kg
				Loyalty Points: 30
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €30,00 | ✅ In stock | Quantity`,
			de: `Leckeres getreidefreies Hundefutter für empfindliche Mägen.
				Gewicht: 12 kg
				Treuepunkte: 30
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €30,00 | ✅ Auf Lager | Menge`,
			fr: `Délicieuse nourriture sans céréales pour chiens aux estomacs sensibles.
				Poids: 12 kg
				Points de fidélité: 30
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €30,00 | ✅ En stock | Quantité`
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
		]
	},
	{
		id: 5,
		handle: 'premium-dog-food',
		title: {
			en: 'Premium Dog Food',
			de: 'Premium Hundefutter',
			fr: 'Nourriture premium pour chiens'
		},
		description: {
			en: `High-quality dog food for all breeds.
				Weight: 10 kg
				Loyalty Points: 35
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €35,00 | ✅ In stock | Quantity`,
			de: `Hochwertiges Hundefutter für alle Rassen.
				Gewicht: 10 kg
				Treuepunkte: 35
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €35,00 | ✅ Auf Lager | Menge`,
			fr: `Nourriture de haute qualité pour toutes les races de chiens.
				Poids: 10 kg
				Points de fidélité: 35
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €35,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/premium-dog-food.jpg'],
		price: 35.0,
		currency: '€',
		tags: ['premium'],
		benefits: [
			{ icon: '🌱', text: '100% natural ingredients' },
			{ icon: '🥩', text: 'Rich in protein for strong muscles' },
			{ icon: '🐕', text: 'Suitable for all breeds' }
		]
	},
	{
		id: 6,
		handle: 'vegan-dog-food',
		title: {
			en: 'Vegan Dog Food',
			de: 'Veganes Hundefutter',
			fr: 'Nourriture vegan pour chiens'
		},
		description: {
			en: `Plant-based dog food for a sustainable diet.
				Weight: 8 kg
				Loyalty Points: 40
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €40,00 | ✅ In stock | Quantity`,
			de: `Pflanzenbasiertes Hundefutter für eine nachhaltige Ernährung.
				Gewicht: 8 kg
				Treuepunkte: 40
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €40,00 | ✅ Auf Lager | Menge`,
			fr: `Nourriture à base de plantes pour une alimentation durable.
				Poids: 8 kg
				Points de fidélité: 40
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €40,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/vegan-dog-food.jpg'],
		price: 40.0,
		currency: '€',
		tags: ['vegan'],
		benefits: [
			{ icon: '🌱', text: '100% plant-based ingredients' },
			{ icon: '🌍', text: 'Eco-friendly and sustainable' },
			{ icon: '🐕', text: 'Great for dogs with allergies' }
		]
	},
	{
		id: 7,
		handle: 'hypoallergenic-dog-food',
		title: {
			en: 'Hypoallergenic Dog Food',
			de: 'Hypoallergenes Hundefutter',
			fr: 'Nourriture hypoallergénique pour chiens'
		},
		description: {
			en: `Specially formulated for dogs with food sensitivities.
				Weight: 9 kg
				Loyalty Points: 45
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €45,00 | ✅ In stock | Quantity`,
			de: `Speziell für Hunde mit Futtermittelunverträglichkeiten entwickelt.
				Gewicht: 9 kg
				Treuepunkte: 45
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €45,00 | ✅ Auf Lager | Menge`,
			fr: `Formulé spécialement pour les chiens ayant des sensibilités alimentaires.
				Poids: 9 kg
				Points de fidélité: 45
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €45,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/hypoallergenic-dog-food.jpg'],
		price: 45.0,
		currency: '€',
		tags: ['hypoallergenic'],
		benefits: [
			{ icon: '🌱', text: 'Free from common allergens' },
			{ icon: '🥩', text: 'High-quality protein sources' },
			{ icon: '🐕', text: 'Gentle on sensitive stomachs' }
		]
	},
	{
		id: 8,
		handle: 'weight-control-dog-food',
		title: {
			en: 'Weight Control Dog Food',
			de: 'Gewichtskontrolle Hundefutter',
			fr: 'Nourriture pour chiens contrôle du poids'
		},
		description: {
			en: `Helps maintain a healthy weight for your dog.
				Weight: 10 kg
				Loyalty Points: 38
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €38,00 | ✅ In stock | Quantity`,
			de: `Hilft, ein gesundes Gewicht Ihres Hundes zu halten.
				Gewicht: 10 kg
				Treuepunkte: 38
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €38,00 | ✅ Auf Lager | Menge`,
			fr: `Aide à maintenir un poids santé pour votre chien.
				Poids: 10 kg
				Points de fidélité: 38
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €38,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/weight-control-dog-food.jpg'],
		price: 38.0,
		currency: '€',
		tags: ['weight-control'],
		benefits: [
			{ icon: '🌱', text: 'Low-calorie formula' },
			{ icon: '🥩', text: 'Rich in essential nutrients' },
			{ icon: '🐕', text: 'Supports healthy metabolism' }
		]
	},
	{
		id: 9,
		handle: 'puppy-growth-dog-food',
		title: {
			en: 'Puppy Growth Dog Food',
			de: 'Welpenwachstum Hundefutter',
			fr: 'Nourriture pour chiots croissance'
		},
		description: {
			en: `Designed to support healthy growth in puppies.
				Weight: 12 kg
				Loyalty Points: 50
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €50,00 | ✅ In stock | Quantity`,
			de: `Entwickelt, um ein gesundes Wachstum bei Welpen zu unterstützen.
				Gewicht: 12 kg
				Treuepunkte: 50
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €50,00 | ✅ Auf Lager | Menge`,
			fr: `Conçu pour soutenir une croissance saine chez les chiots.
				Poids: 12 kg
				Points de fidélité: 50
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €50,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/puppy-growth-dog-food.jpg'],
		price: 50.0,
		currency: '€',
		tags: ['puppy', 'growth'],
		benefits: [
			{ icon: '🌱', text: 'Rich in vitamins and minerals' },
			{ icon: '🥩', text: 'High protein for muscle development' },
			{ icon: '🐕', text: 'Supports bone and joint health' }
		]
	},
	{
		id: 10,
		handle: 'senior-health-dog-food',
		title: {
			en: 'Senior Health Dog Food',
			de: 'Senioren Gesundheit Hundefutter',
			fr: 'Nourriture pour chiens âgés santé'
		},
		description: {
			en: `Specially designed for senior dogs to support joint health.
				Weight: 11 kg
				Loyalty Points: 42
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €42,00 | ✅ In stock | Quantity`,
			de: `Speziell für ältere Hunde entwickelt, um die Gelenkgesundheit zu unterstützen.
				Gewicht: 11 kg
				Treuepunkte: 42
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €42,00 | ✅ Auf Lager | Menge`,
			fr: `Conçu spécialement pour les chiens âgés pour soutenir la santé des articulations.
				Poids: 11 kg
				Points de fidélité: 42
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €42,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/senior-health-dog-food.jpg'],
		price: 42.0,
		currency: '€',
		tags: ['senior', 'health'],
		benefits: [
			{ icon: '🌱', text: 'Supports joint and bone health' },
			{ icon: '🥩', text: 'Rich in essential nutrients' },
			{ icon: '🐕', text: 'Perfect for senior dogs' }
		]
	},
	{
		id: 11,
		handle: 'active-dog-food',
		title: {
			en: 'Active Dog Food',
			de: 'Aktive Hunde Hundefutter',
			fr: 'Nourriture pour chiens actifs'
		},
		description: {
			en: `High-energy formula for active and working dogs.
				Weight: 13 kg
				Loyalty Points: 55
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €55,00 | ✅ In stock | Quantity`,
			de: `Hochenergetische Formel für aktive und arbeitende Hunde.
				Gewicht: 13 kg
				Treuepunkte: 55
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €55,00 | ✅ Auf Lager | Menge`,
			fr: `Formule riche en énergie pour les chiens actifs et de travail.
				Poids: 13 kg
				Points de fidélité: 55
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €55,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/active-dog-food.jpg'],
		price: 55.0,
		currency: '€',
		tags: ['active', 'energy'],
		benefits: [
			{ icon: '🌱', text: 'Boosts energy levels' },
			{ icon: '🥩', text: 'High protein for muscle recovery' },
			{ icon: '🐕', text: 'Ideal for active lifestyles' }
		]
	},
	{
		id: 12,
		handle: 'small-breed-dog-food',
		title: {
			en: 'Small Breed Dog Food',
			de: 'Kleine Rassen Hundefutter',
			fr: 'Nourriture pour petites races de chiens'
		},
		description: {
			en: `Tailored nutrition for small breed dogs.
				Weight: 7 kg
				Loyalty Points: 30
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €30,00 | ✅ In stock | Quantity`,
			de: `Maßgeschneiderte Ernährung für kleine Hunderassen.
				Gewicht: 7 kg
				Treuepunkte: 30
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €30,00 | ✅ Auf Lager | Menge`,
			fr: `Nutrition adaptée pour les petites races de chiens.
				Poids: 7 kg
				Points de fidélité: 30
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €30,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/small-breed-dog-food.jpg'],
		price: 30.0,
		currency: '€',
		tags: ['small-breed'],
		benefits: [
			{ icon: '🌱', text: 'Small kibble size for easy chewing' },
			{ icon: '🥩', text: 'Balanced nutrition for small breeds' },
			{ icon: '🐕', text: 'Promotes healthy skin and coat' }
		]
	},
	{
		id: 13,
		handle: 'large-breed-dog-food',
		title: {
			en: 'Large Breed Dog Food',
			de: 'Große Rassen Hundefutter',
			fr: 'Nourriture pour grandes races de chiens'
		},
		description: {
			en: `Specially formulated for large breed dogs.
				Weight: 15 kg
				Loyalty Points: 60
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €60,00 | ✅ In stock | Quantity`,
			de: `Speziell für große Hunderassen entwickelt.
				Gewicht: 15 kg
				Treuepunkte: 60
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €60,00 | ✅ Auf Lager | Menge`,
			fr: `Formulé spécialement pour les grandes races de chiens.
				Poids: 15 kg
				Points de fidélité: 60
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €60,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/large-breed-dog-food.jpg'],
		price: 60.0,
		currency: '€',
		tags: ['large-breed'],
		benefits: [
			{ icon: '🌱', text: 'Supports joint and bone health' },
			{ icon: '🥩', text: 'High protein for muscle strength' },
			{ icon: '🐕', text: 'Tailored for large breeds' }
		]
	},
	{
		id: 14,
		handle: 'dental-care-dog-food',
		title: {
			en: 'Dental Care Dog Food',
			de: 'Zahnpflege Hundefutter',
			fr: 'Nourriture pour chiens soin dentaire'
		},
		description: {
			en: `Promotes dental health and reduces tartar buildup.
				Weight: 10 kg
				Loyalty Points: 35
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €35,00 | ✅ In stock | Quantity`,
			de: `Fördert die Zahngesundheit und reduziert Zahnsteinbildung.
				Gewicht: 10 kg
				Treuepunkte: 35
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €35,00 | ✅ Auf Lager | Menge`,
			fr: `Favorise la santé dentaire et réduit l'accumulation de tartre.
				Poids: 10 kg
				Points de fidélité: 35
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €35,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/dental-care-dog-food.jpg'],
		price: 35.0,
		currency: '€',
		tags: ['dental-care'],
		benefits: [
			{ icon: '🌱', text: 'Reduces tartar buildup' },
			{ icon: '🥩', text: 'Supports healthy gums' },
			{ icon: '🐕', text: 'Freshens breath' }
		]
	},
	{
		id: 15,
		handle: 'skin-and-coat-dog-food',
		title: {
			en: 'Skin and Coat Dog Food',
			de: 'Haut und Fell Hundefutter',
			fr: 'Nourriture pour chiens peau et pelage'
		},
		description: {
			en: `Enhances skin health and promotes a shiny coat.
				Weight: 9 kg
				Loyalty Points: 40
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €40,00 | ✅ In stock | Quantity`,
			de: `Verbessert die Hautgesundheit und fördert ein glänzendes Fell.
				Gewicht: 9 kg
				Treuepunkte: 40
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €40,00 | ✅ Auf Lager | Menge`,
			fr: `Améliore la santé de la peau et favorise un pelage brillant.
				Poids: 9 kg
				Points de fidélité: 40
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €40,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/skin-and-coat-dog-food.jpg'],
		price: 40.0,
		currency: '€',
		tags: ['skin-and-coat'],
		benefits: [
			{ icon: '🌱', text: 'Rich in omega-3 and omega-6' },
			{ icon: '🥩', text: 'Promotes healthy skin' },
			{ icon: '🐕', text: 'Enhances coat shine' }
		]
	},
	{
		id: 16,
		handle: 'digestive-care-dog-food',
		title: {
			en: 'Digestive Care Dog Food',
			de: 'Verdauungspflege Hundefutter',
			fr: 'Nourriture pour chiens soin digestif'
		},
		description: {
			en: `Supports healthy digestion and gut health.
				Weight: 10 kg
				Loyalty Points: 45
				Shipping Info: 🚚 Free delivery from €49 | Secure payment
				Call to Action: 🛒 Add to Cart €45,00 | ✅ In stock | Quantity`,
			de: `Unterstützt eine gesunde Verdauung und Darmgesundheit.
				Gewicht: 10 kg
				Treuepunkte: 45
				Versandinfo: 🚚 Kostenlose Lieferung ab 49 € | Sichere Zahlung
				Aktion: 🛒 In den Warenkorb €45,00 | ✅ Auf Lager | Menge`,
			fr: `Soutient une digestion saine et la santé intestinale.
				Poids: 10 kg
				Points de fidélité: 45
				Infos sur la livraison: 🚚 Livraison gratuite à partir de 49 € | Paiement sécurisé
				Appel à l'action: 🛒 Ajouter au panier €45,00 | ✅ En stock | Quantité`
		},
		images: ['https://example.com/digestive-care-dog-food.jpg'],
		price: 45.0,
		currency: '€',
		tags: ['digestive-care'],
		benefits: [
			{ icon: '🌱', text: 'Improves gut health' },
			{ icon: '🥩', text: 'Easily digestible ingredients' },
			{ icon: '🐕', text: 'Reduces digestive discomfort' }
		]
	}
];

export default products;
