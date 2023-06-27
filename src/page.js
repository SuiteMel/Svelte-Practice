import OneCol from './lib/components/one-col.svelte';
import TwoCol from './lib/components/two-col.svelte';
import LR from './lib/components/lr.svelte';

const page = [
  {
    name: OneCol,
    data: { content: '<h1 class="font-headings text-5xl">Passionate about web development.</h1>' },
  },
  {
    name: LR,
    data: { 
      content: '<h2 class="font-headings text-3xl">Hi, I\'m Melissa Waltner</h2><p>Lorem ipsum dolor sit amet. Est ipsam debitis aut ducimus accusantium eos natus accusantium ut dicta Quis hic quia esse ex quam accusantium. A exercitationem itaque ut perferendis iste et labore neque et exercitationem officia eum voluptas voluptas est libero quia. Ad iure pariatur sed dolores internos et optio deleniti est saepe labore.</p>' ,
      src: './src/assets/undraw_cat_epte.svg',
      alt: 'cat'
    }
  },
  {
    name: TwoCol,
    data: {
      cols: [
        { content: '<h2>Column Title</h2><p>More content here</p>' },
        { content: '<h2>Column Title Two</h2><p>More content here too</p>' },
      ],
    },
  },
  {
    name: OneCol,
    data: { content: '<h3>More Content</h3><p>Another page, another day.</p>' },
  },
];

export default page;
