<script>
  export let title, poster, year;
</script>

<article>
  <img alt={title} src={poster} />
  <h3>{title}</h3>
  <span>{year}</span>
  {#if 2020 - year < 5}
    <i>🆕</i>
  {/if}
</article>

<style>
  article {
    border: 1px solid #09f;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 16px;
    min-width: 320px;
    max-width: 400px;
  }
  img {
    margin: auto;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 4px;
  }
</style>
