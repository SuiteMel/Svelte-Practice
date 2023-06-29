<script>
  export let data;
</script>

<section class="{data.sectionClass}">
  <div class="container">
    <div class="grid {data.gridClasses}">
      {#each data.items as item}
        <svelte:component this={item.name} data={item.data} />
      {/each}
    </div>
  </div>
</section>