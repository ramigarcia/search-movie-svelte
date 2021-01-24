<script>
	export let saludo;
</script>

<main>
	<h1>{saludo}</h1>
	<p>Visit <a href="https://ramigarcia.github.io/portafolio-2021" target="_blank">My Portfolio</a></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #09f;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>