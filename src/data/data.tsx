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

// Restaurant Images Import
import RestaurantImage from '../assets/25_Restaurant/MGM_Canteen.jpg';
import QueensLandRestaurantImage from '../assets/25_Restaurant/Queensland_Canteen.jpg';
import RestaurantImage1 from '../assets/25_Restaurant/image1.jpg';
import RestaurantImage2 from '../assets/25_Restaurant/image2.jpg';
import RestaurantImage3 from '../assets/25_Restaurant/image3.jpg';
import RestaurantImage4 from '../assets/25_Restaurant/image4.jpg';
import RestaurantImage5 from '../assets/25_Restaurant/image5.jpg';
import RestaurantImage6 from '../assets/25_Restaurant/image6.jpg';

// Food Images Import
import BurgerManiaBurgerImage from '../assets/18_search_list/burger-mania-burger.jpg';
import DjalmaBurgerImage from '../assets/18_search_list/djalma-burger.jpg';
import DoubleCheeseBurgerImage from '../assets/18_search_list/double-cheese-burger.jpg';
import TowerBurgerImage from '../assets/18_search_list/tower-burger.jpg';
import VegCheeseBurgerImage from '../assets/18_search_list/veg-cheese-burger.jpg';

// Ride Images Import
import CaribbeanSwingImage from '../assets/19_Top_Destinations/caribbean-swing.jpg';
import CreeperBugImage from '../assets/19_Top_Destinations/creeper-bug.jpg';
import DevilHouseImage from '../assets/19_Top_Destinations/devil-house.jpg';
import DiscoSaucerImage from '../assets/19_Top_Destinations/disco-saucer.jpg';
import DodgemCarImage from '../assets/19_Top_Destinations/dodgem-car.jpg';
import GiantWheelImage from '../assets/19_Top_Destinations/giant-wheel.jpg';
import KamikazeImage from '../assets/19_Top_Destinations/kamikaze.jpg';
import RevolutionImage from '../assets/19_Top_Destinations/revolution.jpg';
import RockOPlaneImage from '../assets/19_Top_Destinations/rock-o-plane.jpg';
import RollerCoasterImage from '../assets/19_Top_Destinations/roller-coaster.jpg';
import WaveSwingerImage from '../assets/19_Top_Destinations/wave-swinger.jpg';

// Weather Images Import

import CloudyLightning from '../assets/weather-icons/cloudy-lightning.svg';
import Fog from '../assets/weather-icons/fog.svg';
import PartlyCloudy from '../assets/weather-icons/partly-cloudy.svg';
import Rain from '../assets/weather-icons/rain.svg';
import RainyLightning from '../assets/weather-icons/rainy-lightning.svg';

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

export const reviews: IReview[] = [
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
    type: 'park',
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
    type: 'park',
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
    type: 'park',
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
    type: 'park',
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
    type: 'park',
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
    type: 'park',
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

const MGMRestaurantImages = [
  {id: '1', image: RestaurantImage},
  {id: '2', image: RestaurantImage1},
  {id: '3', image: RestaurantImage2},
  {id: '4', image: RestaurantImage3},
  {id: '5', image: RestaurantImage4},
  {id: '6', image: RestaurantImage5},
  {id: '7', image: RestaurantImage6},
];

const QueensLandRestaurantImages = [
  {id: '1', image: QueensLandRestaurantImage},
  {id: '2', image: RestaurantImage1},
  {id: '3', image: RestaurantImage2},
  {id: '4', image: RestaurantImage3},
  {id: '5', image: RestaurantImage4},
  {id: '6', image: RestaurantImage5},
  {id: '7', image: RestaurantImage6},
];

export const restaurants: IDetails[] = [
  {
    name: 'MGM - Restaurant',
    type: 'restaurant',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 10,
    rating: 4.5,
    source: RestaurantImage,
    titleImages: MGMRestaurantImages,
    price: 650,
    images: MGMRestaurantImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Queensland',
    type: 'restaurant',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: QueensLandRestaurantImage,
    titleImages: QueensLandRestaurantImages,
    price: 750,
    images: QueensLandRestaurantImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
  },
  {
    name: 'MGM - Restaurant',
    type: 'restaurant',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 10,
    rating: 4.5,
    source: RestaurantImage,
    titleImages: MGMRestaurantImages,
    price: 650,
    images: MGMRestaurantImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Queensland',
    type: 'restaurant',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: QueensLandRestaurantImage,
    titleImages: QueensLandRestaurantImages,
    price: 750,
    images: QueensLandRestaurantImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
  },
  {
    name: 'MGM - Restaurant',
    type: 'restaurant',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 10,
    rating: 4.5,
    source: RestaurantImage,
    titleImages: MGMRestaurantImages,
    price: 650,
    images: MGMRestaurantImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Queensland',
    type: 'restaurant',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: QueensLandRestaurantImage,
    titleImages: QueensLandRestaurantImages,
    price: 750,
    images: QueensLandRestaurantImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
  },
];

const foodImages = [
  {id: '1', image: BurgerManiaBurgerImage},
  {id: '2', image: DjalmaBurgerImage},
  {id: '3', image: DoubleCheeseBurgerImage},
  {id: '4', image: TowerBurgerImage},
  {id: '5', image: VegCheeseBurgerImage},
];

export const food: IDetails[] = [
  {
    name: 'Burger Mania',
    type: 'food',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: BurgerManiaBurgerImage,
    titleImages: foodImages,
    price: 300,
    images: foodImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
    numberOfItems: 0,
  },
  {
    name: 'Djalma Burger',
    type: 'food',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: DjalmaBurgerImage,
    titleImages: foodImages,
    price: 300,
    images: foodImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
    numberOfItems: 0,
  },
  {
    name: 'Double Cheese Burger',
    type: 'food',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: DoubleCheeseBurgerImage,
    titleImages: foodImages,
    price: 300,
    images: foodImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
    numberOfItems: 0,
  },
  {
    name: 'Tower Burger',
    type: 'food',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: TowerBurgerImage,
    titleImages: foodImages,
    price: 300,
    images: foodImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
    numberOfItems: 0,
  },
  {
    name: 'Veg Cheese Burger',
    type: 'food',
    overview:
      "This is the third article of a three-part series. I'm illustrating the marketing challenges of Eggvenger.com, a small business.",
    about:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience.',
    distance: 23,
    rating: 4.5,
    source: VegCheeseBurgerImage,
    titleImages: foodImages,
    price: 300,
    images: foodImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'Queensland Amusement Park Canteen',
      description: 'Theme Park Restaurant at Chennai',
      value: '0',
      latlng: {latitude: 13.03032, longitude: 80.02752},
    },
    reviews: reviews,
    numberOfItems: 0,
  },
];

const rideImages = [
  {id: '1', image: CaribbeanSwingImage},
  {id: '2', image: CreeperBugImage},
  {id: '3', image: DevilHouseImage},
  {id: '4', image: DiscoSaucerImage},
  {id: '5', image: DodgemCarImage},
  {id: '6', image: GiantWheelImage},
  {id: '7', image: KamikazeImage},
  {id: '8', image: RevolutionImage},
  {id: '9', image: RockOPlaneImage},
  {id: '10', image: RollerCoasterImage},
  {id: '11', image: WaveSwingerImage},
];

export const rides: IDetails[] = [
  {
    name: 'Carribean Swing',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: CaribbeanSwingImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Creeper Bug',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: CreeperBugImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Devil House',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: DevilHouseImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Disco Saucer',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: DiscoSaucerImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Dodgem Car',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: DodgemCarImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Giant Wheel',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: GiantWheelImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Kamikaze Ranger',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: KamikazeImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Revolution',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: RevolutionImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Rock-o-plane',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: RockOPlaneImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Roller Coaster',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: RollerCoasterImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
    },
    reviews: reviews,
  },
  {
    name: 'Wave Swinger',
    type: 'ride',
    overview:
      'MGM is synonymous with high-energy entertainment owing to the creation of some of the biggest entertainment parks in the country. We believe that some values like qualitative, entertainment bear, no compromise and we guarantee a fun time with a commitment to give you the best in services and experience. These values and this commitment have undoubtedly boosted the ratings of our park - MGM Dizzee World, Chennai - as the No.1 Amusement Park and we are proud and say it loud - No one knows family entertainment like we do.',
    about:
      "MGM Dizzee World has many firsts' to its credit in the entertainment sector ' first to bring Jurong's Bird Show of Singapore to India (1999); first time in Chennai - hot air balloon ride (1998); first time in amusement park history - visitors given pick up and drop on a helicopter (2000).",
    distance: 10,
    rating: 4.5,
    source: WaveSwingerImage,
    titleImages: rideImages,
    price: 650,
    images: rideImages,
    availability: 'Monday - Sunday',
    location: {
      title: 'MGM Dizzee World',
      description: 'Ride at Chennai',
      value: '0',
      latlng: {latitude: 12.8202, longitude: 80.2492},
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
    title: 'What to Eat',
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
    title: 'What to Eat',
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

export const weatherData = [
  {
    date: 'TODAY, MAY 20',
    day: 'SAT',
    maxTemperature: 40,
    minTemperature: 29,
    precipitaionProbability: 3,
    precipitation: 40,
    weatherCondition: 'Rain',
    windSpeed: 11.6,
  },
  {
    date: 'TOMORROW, MAY 21',
    day: 'SUN',
    maxTemperature: 38,
    minTemperature: 29,
    precipitaionProbability: 0,
    precipitation: 60,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 11.5,
  },
  {
    date: 'MAY 22',
    day: 'MON',
    maxTemperature: 38,
    minTemperature: 29,
    precipitaionProbability: 3,
    precipitation: 100,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 11.8,
  },
  {
    date: 'MAY 23',
    day: 'TUE',
    maxTemperature: 40,
    minTemperature: 28,
    precipitaionProbability: 3,
    precipitation: 0,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 11.4,
  },
  {
    date: 'MAY 24',
    day: 'WED',
    maxTemperature: 41,
    minTemperature: 28,
    precipitaionProbability: 2,
    precipitation: 0,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 12.4,
  },
  {
    date: 'MAY 25',
    day: 'THU',
    maxTemperature: 40,
    minTemperature: 29,
    precipitaionProbability: 13,
    precipitation: 0,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 12.3,
  },
  {
    date: 'MAY 26',
    Temperature: 40,
    minTemperature: 28,
    precipitaionProbability: 3,
    precipitation: 0,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 11.4,
  },
  {
    date: 'MAY 24',
    day: 'WED',
    maxTemperature: 41,
    minTemperature: 28,
    precipitaionProbability: 2,
    precipitation: 0,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 12.4,
  },
  {
    date: 'MAY 25',
    day: 'THU',
    maxTemperature: 40,
    minTemperature: 29,
    precipitaionProbability: 13,
    precipitation: 0,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 12.3,
  },
  {
    date: 'MAY 26',
    day: 'FRI',
    maxTemperature: 40,
    minTemperature: 29,
    precipitaionProbability: 10,
    precipitation: 90,
    weatherCondition: 'PartlyCloudy',
    windSpeed: 11.6,
  },
];

export const locationData = [
  {
    city: 'Chennai',
    name: 'MGM',
    address: 'MGM - Dizzee World, Muthukadu, Tamil Nadu 603 112',
    image: DizzeeWorld,
    latlng: {latitude: 12.826239395491305, longitude: 80.2441702395283},
  },
  {
    city: 'Pondicherry',
    name: 'Cleverland',
    address: 'Cleverland, Muthukadu, Tamil Nadu 603 112',
    image: WhatsThePlanImage,
    latlng: {latitude: 11.916064, longitude: 79.812325},
  },
  {
    city: 'Chennai',
    name: 'Queensland',
    address: 'Queensland, Palanjur Sembarambakkam, Tamil Nadu 600 123',
    image: QueensLand,
    latlng: {latitude: 13.038113136672935, longitude: 80.02734428189174},
  },
];
