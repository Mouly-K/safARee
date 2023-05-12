// Onboarding Slides Import
import OnboardingSplash1 from '../assets/splash1.svg';
import OnboardingSplash2 from '../assets/splash2.svg';
import OnboardingSplash3 from '../assets/splash3.svg';

// Amusement Parks Images Import
import DizzeeWorld from '../assets/amusement-parks/dizzee-world.jpg';
import DizzeeWorld2 from '../assets/amusement-parks/dizzee-world-2.jpg';
import DizzeeWorld3 from '../assets/amusement-parks/dizzee-world-3.jpg';
import DizzeeWorld4 from '../assets/amusement-parks/dizzee-world-4.jpg';
import DizzeeWorld5 from '../assets/amusement-parks/dizzee-world-5.jpg';
import DizzeeWorld6 from '../assets/amusement-parks/dizzee-world-6.jpg';
import DizzeeWorld7 from '../assets/amusement-parks/dizzee-world-7.jpg';

import QueensLand from '../assets/amusement-parks/queens-land.jpg';

// Where to Go Images Import
import FoodImage from '../assets/food.jpg';
import WhatsThePlanImage from '../assets/building.jpg';

import WhereToEat from '../assets/eats.svg';
import WhatsThePlan from '../assets/plan.svg';

// Offer Imports
import OfferImage1 from '../assets/offers-1.jpg';

import ReviewProfileImage from '../assets/review-profile-1.png';
import {IDetails, IReview} from '../utils';

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

const MGMTitleImages = [
  {
    id: '1',
    image: DizzeeWorld,
  },
  {
    id: '2',
    image: DizzeeWorld2,
  },
  {
    id: '3',
    image: DizzeeWorld3,
  },
];

const MGMImages = [
  {
    id: '1',
    image: DizzeeWorld,
  },
  {
    id: '2',
    image: DizzeeWorld2,
  },
  {
    id: '3',
    image: DizzeeWorld3,
  },
  {
    id: '4',
    image: DizzeeWorld4,
  },
  {
    id: '5',
    image: DizzeeWorld5,
  },
  {
    id: '6',
    image: DizzeeWorld6,
  },
  {
    id: '7',
    image: DizzeeWorld7,
  },
];

const QueensLandTitleImages = [
  {
    id: '1',
    image: QueensLand,
  },
  {id: '2', image: DizzeeWorld},
];

const reviews: IReview[] = [
  {
    name: 'Sonal',
    review:
      "So you're going abroad, you've chosen your destination and now you have to choose a hotel.",
    rating: 5,
    image: ReviewProfileImage,
    timeStamp: '2 hours ago',
  },
  {
    name: 'Sakshi',
    review:
      'Here, I focus on a range of items and features that we use in life without giving them a second thought...',
    rating: 4,
    image: ReviewProfileImage,
    timeStamp: 'Yesterday',
  },
  {
    name: 'Gokul',
    review:
      'Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation.',
    rating: 4,
    image: ReviewProfileImage,
    timeStamp: '08 Dec 2018',
  },
];

export const amusementParks: IDetails[] = [
  {
    name: 'MGM - Dizzee World',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: DizzeeWorld,
    titleImages: MGMTitleImages,
    price: 650,
    images: MGMImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Theme Park at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Queensland',
    overview:
      'Recognized as a health capital of the country, Chennai is also visited by tourists to discover its historic tales and explore its iconic sights. The thriving cosmopolitan city reflects an interesting mix of diversified cultures.',
    about:
      'Queensland was established in 2003 on Chennai Bengaluru Trunk Road. Promoted by Rajam Hotels Pvt. Ltd., the fun filled entertainment park spans over an area of 70 acres of land.',
    distance: 23,
    rating: 4.5,
    source: QueensLand,
    titleImages: QueensLandTitleImages,
    price: 750,
    images: MGMImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park',
      description: 'Theme Park at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
  },
  {
    name: 'MGM - Dizzee World',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: DizzeeWorld,
    titleImages: MGMTitleImages,
    price: 650,
    images: MGMImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Theme Park at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Queensland',
    overview:
      'Recognized as a health capital of the country, Chennai is also visited by tourists to discover its historic tales and explore its iconic sights. The thriving cosmopolitan city reflects an interesting mix of diversified cultures.',
    about:
      'Queensland was established in 2003 on Chennai Bengaluru Trunk Road. Promoted by Rajam Hotels Pvt. Ltd., the fun filled entertainment park spans over an area of 70 acres of land.',
    distance: 23,
    rating: 4.5,
    source: QueensLand,
    titleImages: QueensLandTitleImages,
    price: 750,
    images: MGMImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park',
      description: 'Theme Park at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
  },
  {
    name: 'MGM - Dizzee World',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: DizzeeWorld,
    titleImages: MGMTitleImages,
    price: 650,
    images: MGMImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Theme Park at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Queensland',
    overview:
      'Recognized as a health capital of the country, Chennai is also visited by tourists to discover its historic tales and explore its iconic sights. The thriving cosmopolitan city reflects an interesting mix of diversified cultures.',
    about:
      'Queensland was established in 2003 on Chennai Bengaluru Trunk Road. Promoted by Rajam Hotels Pvt. Ltd., the fun filled entertainment park spans over an area of 70 acres of land.',
    distance: 23,
    rating: 4.5,
    source: QueensLand,
    titleImages: QueensLandTitleImages,
    price: 750,
    images: MGMImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park',
      description: 'Theme Park at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
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
