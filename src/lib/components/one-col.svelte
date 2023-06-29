<script>
  export let data;
</script>

<section class="{data.sectionClass}">
  <div class="container">
    <div class="-mx-8">
     <div class="px-8 w-8/12 mx-auto text-center">
        <div class="prose max-w-none">
          {@html data.content}
        </div>
     </div>
    </div>
  </div>
</section>