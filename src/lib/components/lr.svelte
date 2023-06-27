<script>
  export let data;
  let src = data.src;
  let alt = data.alt;
</script>

<section class="my-20">
  <div class="container">
    <div class="-mx-8">
      <div class="px-8 w-10/12 mx-auto">
        <div class="grid grid-cols-2 gap-8 items-center">
          <div>
            <div class="prose max-w-none">
              {@html data.content}
            </div>
          </div>
      
          <div>
            <div class="aspect-square">
              <img {src} {alt} class="object-contain object-center w-full h-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>