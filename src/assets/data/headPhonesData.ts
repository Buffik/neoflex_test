import { HeadPhonesCard } from './model';
import Image_1 from '../images/Image_1.png';
import Image_2 from '../images/Image_2.png';
import Image_3 from '../images/Image_3.png';
import Image_4 from '../images/Image_4.png';
import Image_5 from '../images/Image_5.png';
import Image_6 from '../images/Image_6.png';

export const headPhones: HeadPhonesCard[] = [
  {
    id: 1,
    name: 'Apple BYZ S852I',
    image: Image_1,
    price: 2927,
    prevPrice: 3527,
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Apple EarPods',
    image: Image_2,
    price: 2327,
    prevPrice: 0,
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Apple EarPods',
    image: Image_3,
    price: 3527,
    prevPrice: 0,
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Apple BYZ S852I',
    image: Image_1,
    price: 2927,
    prevPrice: 0,
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Apple EarPods',
    image: Image_2,
    price: 3527,
    prevPrice: 0,
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Apple EarPods',
    image: Image_3,
    price: 3527,
    prevPrice: 0,
    rating: 4.5,
  },
];

export const wireLessHeadPhones: HeadPhonesCard[] = [
  {
    id: 7,
    name: 'Apple AirPods',
    image: Image_4,
    price: 9527,
    prevPrice: 0,
    rating: 4.7,
  },
  {
    id: 8,
    name: 'GERLAX GH-04',
    image: Image_5,
    price: 6527,
    prevPrice: 0,
    rating: 4.7,
  },
  {
    id: 9,
    name: 'BOROFONE BO4',
    image: Image_6,
    price: 7527,
    prevPrice: 0,
    rating: 4.7,
  },
];

export enum headPhonesTypes {
  HeadPhones = 'Наушники',
  wireLessHeadPhones = 'Беспроводные наушники',
}
