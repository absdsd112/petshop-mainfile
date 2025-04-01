<svelte:head>
  <title>Blog - PetShop</title>
  <meta name="description" content="Read the latest articles, tips, and news about pet care, pet products, and more on the PetShop blog." />
  <meta name="keywords" content="PetShop blog, pet care tips, pet products, pet news, pet articles" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<script>
	import { t, locale } from '$lib/i18n/i18n.js';

	let notification = "";

	function handleSubmit(event) {
		event.preventDefault();
		notification = $t('blog.notification');
		setTimeout(() => {
			notification = "";
		}, 5000);
	}

	const featuredPost = {
		title: '5 Tips To Achieve The Best Diet For Your Dog',
		excerpt: 'Learn how to read pet food labels, understand nutritional requirements, and choose the right diet for your dog\'s age and lifestyle. Get expert advice on portion control and feeding schedules.',
		image: 'https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
		url: 'https://www.wellnesspetfood.com/blog/5-tips-to-achieve-the-best-diet-for-your-dog/'
	};

	const recentPosts = [
		{
			title: 'Should You Add Water to Dry Dog Food?',
			excerpt: 'Discover how adding water to kibble can enhance palatability, improve digestion, and increase hydration. Learn the proper ratios and best practices for moistening dry food.',
			image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			url: 'https://www.purepetfood.com/blog/should-you-add-water-to-dry-dog-food'
		},
		{
			title: 'How to Transition Your Pet to Fresh Food',
			excerpt: 'Make the switch to fresh pet food safely and smoothly. Follow our detailed transition guide to prevent digestive issues and ensure your pet enjoys their new diet.',
		    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			url: 'https://www.freshpet.com/blog/how-to-transition-your-pet-to-fresh-food'
		},
		{
			title: 'What Human Foods Can Dogs Eat?',
			excerpt: 'A comprehensive guide to safe and unsafe human foods for dogs. Learn which kitchen staples can be healthy treats and which ones to avoid completely.',
			image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
			url: 'https://www.justfoodfordogs.com/blog/what-human-foods-can-dogs-eat.html'
		}
	];
</script>

<section class="blog-content p-6 space-y-10" style="background-color: beige;">
	<!-- Featured Post Section -->
	<div class="bg-[#A2D5C6] p-6 rounded-lg">
		<div class="flex flex-col md:flex-row items-center">
			<img src={featuredPost.image} alt="Featured post" class="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6 object-cover h-[300px]">
			<div>
				<span class="text-sm font-medium text-blue-600 mb-2 block">Featured Post</span>
				<h2 class="text-2xl font-bold text-center md:text-left mb-4">{featuredPost.title}</h2>
				<p class="text-lg leading-relaxed mb-4">{featuredPost.excerpt}</p>
				<a 
					href={featuredPost.url} 
					target="_blank" 
					rel="noopener noreferrer" 
					class="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
				>
					Read More
				</a>
			</div>
		</div>
	</div>

	<!-- Recent Posts Section -->
	<div class="bg-[#A2D5C6] p-6 rounded-lg">
		<h2 class="text-2xl font-bold text-center mb-6">Recent Posts</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each recentPosts as post}
				<div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
					<img src={post.image} alt={post.title} class="w-full h-48 object-cover">
					<div class="p-4">
						<h3 class="text-xl font-bold mb-2">{post.title}</h3>
						<p class="text-gray-600 mb-4">{post.excerpt}</p>
						<a 
							href={post.url} 
							target="_blank" 
							rel="noopener noreferrer" 
							class="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center"
						>
							Read More 
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
								<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
								<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
							</svg>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Newsletter Section -->
	<div class="bg-yellow-100 p-6 rounded-lg text-center">
		<h2 class="text-2xl font-bold mb-4">Subscribe to Our Pet Care Newsletter</h2>
		<p class="text-lg mb-6">Get weekly tips, advice, and heartwarming stories about pets!</p>
		<form on:submit={handleSubmit} class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
			<input 
				type="email" 
				placeholder="you@example.com" 
				class="p-2 border rounded-md w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
				required
			>
			<button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
				Subscribe
			</button>
		</form>
		{#if notification}
			<div class="mt-4 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-lg shadow-lg animate-bounce">
				{notification}
			</div>
		{/if}
	</div>
</section>