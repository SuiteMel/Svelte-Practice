<script>
  import { Router, Route, Link } from "svelte-navigator"
  import symbols from './assets/symbol-defs.svg?raw';
  import page from './page.js';
  import QRCode from './pages/QRCode.svelte'
  import NFTCard from './pages/NFTCard.svelte';
</script>

<Router basepath="/Svelte-Practice">
  {@html symbols}
  <div class="wrapper">
    <header class="bg-violet-500 text-gray-100 py-2">
      <div class="container">
        <nav class="-mx-2">
          <Link class="px-2" to="/">Home</Link>
          <Link class="px-2" to="/qr-code">QR Code</Link>
          <Link class="px-2" to="/nft-card">NFT Card</Link>
        </nav>
      </div>
    </header>

    <Route path="/">
      <main class="">
        {#each page as component }
          <svelte:component this={component.name} data={component.data} />
        {/each}
      </main>

      <footer class="bg-violet-100 py-2">
        <div class="container">
          <div class="text-xs">
            Coded by <a class="text-violet-700" href="https://github.com/SuiteMel" target="_blank">SuiteMel</a>.
          </div>
        </div>
      </footer>
    </Route>

    <Route path="/qr-code">
      <QRCode />  
    </Route>

    <Route path="/nft-card">
      <NFTCard />  
    </Route>
  </div>
</Router>

<style>
  .wrapper {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>
