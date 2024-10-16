<script>
  export let title
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{ title }</h1>
<slot />
