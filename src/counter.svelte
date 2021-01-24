<script>
	export let initialCounter = 0;
	let contador = initialCounter

	function incrementar (){
		contador ++
	}

	function reset(){
		contador = 0
	}
</script>

<main>
	<span>{contador}</span>
	<br>
	<button on:click={incrementar}>Increment</button>
	<button on:click={reset}>Reset</button>
	<p>Visit <a href="https://ramigarcia.github.io/portafolio-2021" target="_blank">My Portfolio</a></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	span {
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