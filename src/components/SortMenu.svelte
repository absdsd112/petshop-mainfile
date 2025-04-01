<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function selectSortOrder(order) {
    dispatch("sort", { order });
    isOpen = false; // Close the menu after selection
  }
</script>

<div class="relative inline-block text-left">
  <!-- Button to toggle the dropdown -->
  <button
    on:click={toggleMenu}
    class="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none"
  >
    Sort
  </button>

  <!-- Dropdown menu -->
  {#if isOpen}
    <div
      class="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-10"
    >
      <button
        on:click={() => selectSortOrder("asc")}
        class="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Low to High
      </button>
      <button
        on:click={() => selectSortOrder("desc")}
        class="block w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        High to Low
      </button>
    </div>
  {/if}
</div>