<script>
  export let data;
</script>

<section class="my-20">
  <div class="container">
    <div class="-mx-8 flex flex-wrap">
    {#each data.cols as col}
      <div class="px-8 w-4/12 mx-auto text-center flex-initial">
        <div class="prose max-w-none">
          {@html col.content}
        </div>
      </div>
    {/each}
    </div>
  </div>
</section>