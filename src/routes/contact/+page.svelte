<svelte:head>
  <title>Contact Us - PetShop</title>
  <meta name="description" content="Get in touch with PetShop for inquiries, support, or feedback. We're here to help you and your pets." />
  <meta name="keywords" content="Contact PetShop, pet shop support, pet shop inquiries, pet shop feedback" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let name = '';
    let email = '';
    let phone = '';
    let message = '';
    let showNotification = false;

    function handleSubmit() {
        if (name.trim() === '') {
            alert('Please enter your name.');
            return;
        }
        showNotification = true;
        setTimeout(() => {
            showNotification = false;
        }, 3000); // Hide notification after 3 seconds
        // Reset form fields
        name = '';
        email = '';                             
        phone = '';
        message = '';
    }
</script>


<p style="text-align: center">We will get back to you as soon as possible during business hours. Please note that it may sometimes take a couple of days to receive a reply.</p>

<div style="display: flex; align-items: center; gap: 2rem;">
    
    
    <form on:submit|preventDefault={handleSubmit} style="background-color: #FFC107; padding: 2rem; border-radius: 8px; width: 100%;">
        <div style="margin-bottom: 1rem;">
            <h1 style="font-size: 3rem; text-align: center; font-weight: bold;">Leave us a message</h1>
            <br/>
            <label for="name" style="display: block; font-weight: bold;">Name</label>
            <input id="name" type="text" bind:value={name} required style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;" />
        </div>
        <div style="margin-bottom: 1rem;">
            <label for="email" style="display: block; font-weight: bold;">Email *</label>
            <input id="email" type="email" bind:value={email} required style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;" />
        </div>
        <div style="margin-bottom: 1rem;">
            <label for="phone" style="display: block; font-weight: bold;">Phone</label>
            <input id="phone" type="text" bind:value={phone} style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;" />
        </div>
        <div style="margin-bottom: 1rem;">
            <label for="message" style="display: block; font-weight: bold;">Your message</label>
            <textarea id="message" bind:value={message} required style="width: 100%; padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc; height: 100px;"></textarea>
        </div>
       
        <button type="submit" style="background-color: black; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer;">Submit Now</button>
        {#if showNotification}
        <div style="margin-top: 1rem; background-color: #4CAF50; color: white; padding: 1rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            Thank you! Your message has been sent. We will get back to you soon.
        </div>
        {/if}
    </form>
</div>
<br/>
<br/>