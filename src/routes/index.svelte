<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>MaDr | svelteKitStripped</title>
	<meta name="description" content="SvelteKitStripped by MaDr" />
</svelte:head>

<section>
	<h1><a href="https://github.com/MaDrCloudDev/svelteKitStripped">svelteKitStripped</a> by <a href="https://github.com/MaDrCloudDev">MaDrCloudDev</a>
		<div class="welcome">
			<br>
			<a href="https://MaDr.io">
			<span>
				<object data="MaDrLogo.svg" type="image/svg+xml"></object>
			</span></a>
		</div>
	</h1>
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
	a { 
		position: relative; z-index: 1;
	}
	a span { 
		display: inline-block; 
	}
	a object {
		position: relative; z-index: -1;
	}
</style>
