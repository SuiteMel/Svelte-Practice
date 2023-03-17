import OneCol from './lib/components/one-col.svelte';
import TwoCol from './lib/components/two-col.svelte';

const page = [
  {
    name: OneCol,
    data: { content: '<h3>About</h3><p>Another page, another day.</p>' },
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
