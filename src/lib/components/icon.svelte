<script>
  export let name;
</script>

<svg class="icon icon-{name} {$$props.class}" viewBox="0 0 32 32">
  <use xlink:href={`#icon-${name}`} />
</svg>