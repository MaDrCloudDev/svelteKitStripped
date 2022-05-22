<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>MaDr | svelteKitStripped</title>
	<meta name="description" content="SvelteKitStripped" />
</svelte:head>

<section>
	<h1><a href="https://github.com/MaDrCloudDev/svelteKitStripped">svelteKitStripped</a> by <a href="https://github.com/MaDrCloudDev">MaDrCloudDev</a>
		<div class="welcome">
		</div>
	</h1>

	<h2>
		Hello World.
	</h2>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
