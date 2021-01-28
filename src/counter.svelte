<script>
  export let initialCounter = 0;
  export let maxCounter = 10;
  let contador = initialCounter;

  function incrementar() {
    contador++;
  }

  function reset() {
    contador = 0;
  }

  // Declarando let no podemos decir que es un etado reactivo
  // De esta forma cada vez que contador cambie isEvenOrOdd no va a cambiar

  // let isEvenOrOdd = contador % 2 === 0 ? 'Is Even' : 'In Odd'

  // De esta forma cada vez que contador cambie isEvenOrOdd va a cambiar
  // Para decir que es un estado reactivo debemos usar => $:
  $: isEvenOrOdd = contador % 2 === 0 ? "Is Even" : "In Odd";

  // Dentro de las llaves podemos meter bloques de código
  // $: {
  //   if (contador > 9){
  //     contador = 9
  //   }
  // }

  // Tambien lo podemos hacer de una mejor forma
  $: if (contador > maxCounter) {
    console.log("Limit counter");
    contador = maxCounter;
  }
</script>

<main>
  <span class="number">{contador}</span>
  <br />
  <span>{isEvenOrOdd}</span>
  <br />
  <button on:click={incrementar}>Increment</button>
  <button on:click={reset}>Reset</button>
  <p>
    Visit <a href="https://ramigarcia.github.io/portafolio-2021" target="_blank"
      >My Portfolio</a
    >
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  .number {
    font-size: 3rem;
  }

  span {
    color: #09f;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
