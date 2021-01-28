<script>
  import Movie from "./Movie.svelte";

  const apiKey = "7b0c88ec";

  let value = "";
  let response = [];

  const handleInput = (e) => (value = e.target.value);

  $: if (value.length > 2) {
    console.log(value);
    response = fetch(`https://www.omdbapi.com/?s=${value}&apikey=${apiKey}`)
      /* .then(
        (res) =>
          !res.ok() &&
          new Error("Something bad happened with the fetching of movies")
      ) */
      .then((res) => res.json())
      .then((apiResponse) => apiResponse.Search || []);
  }
</script>

<input placeholder="Search Movies..." {value} on:input={handleInput} />

{#await response}
  <p>loading...</p>
{:then movies}
  {#each movies as { Title, Poster, Year }}
    <Movie title={Title} poster={Poster} year={Year} />
  {:else}
    <strong> No hay resultados </strong>
  {/each}
{:catch error}
  <p>❌ There has been error {error}</p>
{/await}

<style>
  input {
    width: 300px;
    margin: 5px auto;
    outline: none;
  }

  input:focus {
    border: 2px solid #09f;
  }
</style>
