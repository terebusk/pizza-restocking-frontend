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
    id: '1',
    image: pepperoni,
    name: 'Sliced pepperoni',
    price: 15.99,
    type: 'meat',
    date: "2023-12-05",
    description: 'Delight in the bold, savory punch of perfectly seasoned and thinly sliced cured pork.',
    special: false
  },
  {
    id: '2',
    image: mozzarella,
    name: 'Grated mozarella',
    price: 18.99,
    type: 'dairy',
    description: 'Indulge in the velvety richness of freshly grated mozzarella, a creamy masterpiece that blankets your pizza in gooey perfection.',
    special: false
  },

  {
    id: '3',
    image: mushrooms,
    name: 'Sliced button mushrooms',
    price: 12.99,
    type: 'vegtable',
    date: "2023-11-28",
    description: 'Elevate your pizza experience with the earthy and robust flavor of plump mushrooms, adding a delectable umami depth.',
    special: false
  },
  {
    id: '4',
    image: ham,
    name: 'Diced ham',
    price: 14.99,
    type: 'meat',
    date: "2023-11-30",
    description: 'Savor the succulent and savory notes of thinly sliced ham, a delightful addition that brings a hint of smoky sweetness to each bite.',
    special: false
  },
  {
    id: '5',
    image: pineapple,
    name: 'Pineapple chunks',
    price: 11.99,
    type: 'vegtable',
    description: 'Sweep the room off its feet in our Ethereal Moonlight Evening Dress. Crafted to mimic the allure of the moonlight, this dress is a nod to those who appreciate subtle glamour and a standout silhouette.',
    special: true
  },
  {
    id: '6',
    image: jalapeno,
    name: 'Jalapeno',
    price: 22.99,
    type: 'vegtable',
    description: 'Ignite your taste buds with the fiery kick of fresh jalapenos, adding a spicy zing that plays harmoniously with the other flavors.',
    special: false
  },
  {
    id: '7',
    image: tomato,
    name: 'Sliced tomatoes',
    price: 9.99,
    type: 'vegtable',
    date: "2023-11-28",
    description: 'Enjoy the vibrant, sun-kissed essence of ripe tomatoes, generously spread to bring a burst of freshness and tang to every slice.',
    special: false
  },
  {
    id: '8',
    image: basil,
    name: 'Basil',
    price: 18.99,
    type: 'vegtable',
    date: "2023-11-27",
    description: 'Revel in the aromatic and herbaceous charm of fresh basil leaves, sprinkled atop your pizza to infuse a burst of fragrant, garden-fresh goodness.'
  }
];
