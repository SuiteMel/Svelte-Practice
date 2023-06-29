import OneCol from './lib/components/one-col.svelte';
import TwoCol from './lib/components/two-col.svelte';
import LR from './lib/components/lr.svelte';
import Grid from './lib/components/grid.svelte';
import Card from './lib/components/card.svelte';
import Prose from './lib/components/prose.svelte';

const page = [
  {
    name: OneCol,
    data: { 
      sectionClass: 'mt-20',
      content: '<h1 class="font-headings text-5xl">Passionate about web development.</h1>' 
    },
  },
  {
    name: LR,
    data: { 
      content: '<h2 class="font-headings text-3xl">Hi, I\'m Melissa Waltner</h2><p>Lorem ipsum dolor sit amet. Est ipsam debitis aut ducimus accusantium eos natus accusantium ut dicta Quis hic quia esse ex quam accusantium. A exercitationem itaque ut perferendis iste et labore neque et exercitationem officia eum voluptas voluptas est libero quia. Ad iure pariatur sed dolores internos et optio deleniti est saepe labore.</p>' ,
      src: '/undraw_cat_epte.svg',
      alt: 'cat'
    }
  },
  {
    name: OneCol,
    data: { 
      sectionClass: 'mb-8',
      content: '<h1 class="font-headings text-3xl">Featured Projects</h1>' 
    },
  },
  {
    name: Grid,
    data: {
      sectionClass: 'mb-20',
      gridClasses: 'grid-cols-3 gap-10',
      items: [
        {
          name: Card,
          data: {
            src: '/auschwitz-unionstation.png',
            alt: 'Auschwitz Digital Exhibit Site Intro',
            link: 'https://auschwitz.unionstation.org',
            title: 'Auschwitz Digital Exhibit',
            content: '<p>Winner of the A17 Design Awards Microsites category and Jurors Choice Award.</p>',
          }
        },
        {
          name: Card,
          data: {
            src: '/mowersnow.png',
            alt: 'Homepage of Mowers Now',
            link: 'https://mowers-now.com',
            title: 'Mowers Now',
          }
        },
        {
          name: Card,
          data: {
            src: '/sorinc.png',
            alt: 'Homepage of SOR Inc',
            link: 'https://www.sorinc.com',
            title: 'SOR Inc.',
            content: '<p>Developed for ADA compliancy.</p>'
          }
        }
      ]
    }
  },
  // {
  //   name: Grid,
  //   data: {
  //     gridClasses: 'grid-cols-2 gap-10 text-center',
  //     items: [
  //       {
  //         name: Prose,
  //         data: {
  //           content: '<h2>Column Title</h2><p>More content here</p>'
  //         }
  //       },
  //       {
  //         name: Prose,
  //         data: {
  //           content: '<h2>Column Title Two</h2><p>More content here too</p>'
  //         }
  //       }
  //     ]
  //   }
  // },
  // {
  //   name: OneCol,
  //   data: { content: '<h3>More Content</h3><p>Another page, another day.</p>' },
  // },
];

export default page;
