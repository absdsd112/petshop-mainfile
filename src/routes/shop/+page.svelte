<svelte:head>
  <title>Shop - PetShop</title>
  <meta name="description" content="Browse our wide range of pet products, including food, toys, and accessories. Find everything your pet needs at PetShop." />
  <meta name="keywords" content="PetShop shop, pet products, pet food, pet toys, pet accessories" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<script>
  import SortMenu from "$lib/components/SortMenu.svelte";

  let products = [
    { id: 1, name: "Dog Food", price: 20 },
    { id: 2, name: "Cat Toy", price: 10 },
    { id: 3, name: "Bird Cage", price: 50 },
    { id: 4, name: "Fish Tank", price: 100 }
  ];

  let sortOrder = "asc"; // Default sorting order

  // Reactive sorting logic
  $: sortedProducts = [...products].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  function handleSort(event) {
    sortOrder = event.detail.order;
  }
</script>

<section class="shop-page p-6">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-2xl font-bold">Shop</h1>
    <SortMenu on:sort={handleSort} />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each sortedProducts as product}
      <div class="p-4 border rounded-lg shadow-md">
        <h2 class="text-lg font-bold">{product.name}</h2>
        <p class="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
    {/each}
  </div>
</section>