// Onboarding Slides Import
import OnboardingSplash1 from '../assets/splash1.svg';
import OnboardingSplash2 from '../assets/splash2.svg';
import OnboardingSplash3 from '../assets/splash3.svg';

// Amusement Parks Images Import
import DizzeeWorld from '../assets/amusement-parks/dizzee-world.jpg';
import QueensLand from '../assets/amusement-parks/queens-land.jpg';

// Where to Go Images Import
import FoodImage from '../assets/food.jpg';
import WhatsThePlanImage from '../assets/building.jpg';

import WhereToEat from '../assets/eats.svg';
import WhatsThePlan from '../assets/plan.svg';

// Offer Imports
import OfferImage1 from '../assets/offers-1.jpg';

export const onboardingSlides = [
  {
    id: '1',
    title: 'Explore the World',
    description:
      'Classifieds are usually the first place you think of when you are getting ready to make a purchase.',
    image: OnboardingSplash1,
  },
  {
    id: '2',
    title: 'Discover Places with AR',
    description:
      'You will see all the beauty that Maui has to offer and can have a great time for the entire family.',
    image: OnboardingSplash2,
  },
  {
    id: '3',
    title: 'Ready to Travel',
    description:
      'Maui helicopter tours are a great way to see the island from a different perspective and have a fun adventure.',
    image: OnboardingSplash3,
  },
];

export const amusementParks = [
  {
    name: 'MGM - Dizzee World',
    distance: 10,
    rating: 4.5,
    source: DizzeeWorld,
    price: 650,
    availability: 'Monday - Sunday',
  },
  {
    name: 'Queensland',
    distance: 23,
    rating: 4.5,
    source: QueensLand,
    price: 750,
    availability: 'Monday - Sunday',
  },
  {
    name: 'MGM - Dizzee World',
    distance: 10,
    rating: 4.5,
    source: DizzeeWorld,
    price: 650,
    availability: 'Monday - Sunday',
  },
  {
    name: 'Queensland',
    distance: 23,
    rating: 4.5,
    source: QueensLand,
    price: 750,
    availability: 'Monday - Sunday',
  },
  {
    name: 'MGM - Dizzee World',
    distance: 10,
    rating: 4.5,
    source: DizzeeWorld,
    price: 650,
    availability: 'Monday - Sunday',
  },
  {
    name: 'Queensland',
    distance: 23,
    rating: 4.5,
    source: QueensLand,
    price: 750,
    availability: 'Monday - Sunday',
  },
];

export const whereToGo = [
  {
    title: 'Where to Eat',
    icon: WhereToEat,
    image: FoodImage,
    color: 'rgba(255, 162, 107, 0.8)',
  },
  {
    title: 'WhatsThePlan',
    icon: WhatsThePlan,
    image: WhatsThePlanImage,
    color: "'rgba(0, 0, 0, 0.1)'",
  },
  {
    title: 'Where to Eat',
    icon: WhereToEat,
    image: FoodImage,
    color: "'rgba(255, 162, 107, 0.8)'",
  },
  {
    title: 'WhatsThePlan',
    icon: WhatsThePlan,
    image: WhatsThePlanImage,
    color: "'rgba(0, 0, 0, 0.1)'",
  },
];

export const offers = [
  {
    hashtags: ['restaurant', 'pizza'],
    title: '20% Discount on Entry Tickets @ MGM Theme Park',
    description: 'Valid only from Monday till Friday. Not valid on Weekends.',
    image: OfferImage1,
  },
  {
    hashtags: ['restaurant', 'pizza'],
    title: '20% Discount on Entry Tickets @ MGM Theme Park',
    description: 'Valid only from Monday till Friday. Not valid on Weekends.',
    image: OfferImage1,
  },
  {
    hashtags: ['restaurant', 'pizza'],
    title: '20% Discount on Entry Tickets @ MGM Theme Park',
    description: 'Valid only from Monday till Friday. Not valid on Weekends.',
    image: OfferImage1,
  },
];
