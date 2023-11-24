import pepperoni from './assets/pepperoni.jpg';
import mozzarella from './assets/mozzarella.jpg';
import mushrooms from './assets/mushrooms.jpg';
import ham from './assets/ham.jpg';
import jalapeno from './assets/jalapeno.jpg';
import pineapple from './assets/pineapple.jpg';
import tomato from './assets/tomato.jpg';
import basil from './assets/basil.jpg';

export const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    image: pepperoni,
    title: 'Sliced pepperoni',
    price: 15.99,
    type: 'meat',
    perishable: false,
    date: "2023-12-05T12:00:00.000Z",
    description: 'Delight in the bold, savory punch of perfectly seasoned and thinly sliced cured pork.',
    special: false
  },
  {
    id: 'p2',
    image: mozzarella,
    title: 'Grated mozarella',
    price: 18.99,
    type: 'dairy',
    perishable: false,
    description: 'Indulge in the velvety richness of freshly grated mozzarella, a creamy masterpiece that blankets your pizza in gooey perfection.',
    special: false
  },

  {
    id: 'p3',
    image: mushrooms,
    title: 'Sliced button mushrooms',
    price: 12.99,
    type: 'vegtable',
    perishable: true,
    date: "2023-11-28T12:00:00.000Z",
    description: 'Elevate your pizza experience with the earthy and robust flavor of plump mushrooms, adding a delectable umami depth.',
    special: false
  },
  {
    id: 'p4',
    image: ham,
    title: 'Diced ham',
    price: 14.99,
    type: 'meat',
    perishable: true,
    date: "2023-11-30T12:00:00.000Z",
    description: 'Savor the succulent and savory notes of thinly sliced ham, a delightful addition that brings a hint of smoky sweetness to each bite.',
    special: false
  },
  {
    id: 'p5',
    image: pineapple,
    title: 'Pineapple chunks',
    price: 11.99,
    type: 'vegtable',
    perishable: false,
    description: 'Sweep the room off its feet in our Ethereal Moonlight Evening Dress. Crafted to mimic the allure of the moonlight, this dress is a nod to those who appreciate subtle glamour and a standout silhouette.',
    special: true
  },
  {
    id: 'p6',
    image: jalapeno,
    title: 'Jalapeno',
    price: 22.99,
    type: 'vegtable',
    perishable: false,
    description: 'Ignite your taste buds with the fiery kick of fresh jalapenos, adding a spicy zing that plays harmoniously with the other flavors.',
    special: false
  },
  {
    id: 'p7',
    image: tomato,
    title: 'Sliced tomatoes',
    price: 9.99,
    type: 'vegtable',
    perishable: true,
    date: "2023-11-28T12:00:00.000Z",
    description: 'Enjoy the vibrant, sun-kissed essence of ripe tomatoes, generously spread to bring a burst of freshness and tang to every slice.',
    special: false
  },
  {
    id: 'p8',
    image: basil,
    title: 'Basil',
    price: 18.99,
    type: 'vegtable',
    perishable: true,
    date: "2023-11-27T12:00:00.000Z",
    description: 'Revel in the aromatic and herbaceous charm of fresh basil leaves, sprinkled atop your pizza to infuse a burst of fragrant, garden-fresh goodness.'
  }
];
