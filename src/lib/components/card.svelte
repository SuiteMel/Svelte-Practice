<script>
  export let data;
</script>

<article>
  <img src="{data.src}" alt="{data.alt}" class="mb-4 rounded-lg mx-auto">

  <a class="underline text-violet-700 hover:no-underline" href="{data.link}">
    <h3 class="text-2xl font-headings font-bold">
      {data.title}
    </h3>
  </a>

  {#if data.content}
    <div class="mt-3">
      {@html data.content}
    </div>
  {/if}
</article>