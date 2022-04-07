import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Pressable,
  useWindowDimensions,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ImageView from 'react-native-image-viewing';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

import {ILatLng, IMarker, IReview} from '../../utils';
import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';

import Carousel from '../../components/General/Carousel';
import Rating from '../../components/General/Rating';
import ReviewCard from '../../components/General/ReviewCard';
import PageDivider from '../../components/General/PageDivider';
import ImageCollage from '../../components/General/ImageCollage';
import StyledButton from '../../components/General/StyledButton';
import {food} from '../../data/data';

interface Props {
  type: string;
  name: string;
  overview: string;
  about: string;
  distance: string;
  rating: string;
  source: any;
  titleImages: any[];
  price: string;
  images: any[];
  availability: string;
  location: IMarker;
  reviews: any[];
}

export default function Details({route, navigation}: any) {
  const {width} = useWindowDimensions();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      return () => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor(colors.white);
      };
    }, []),
  );

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imageViewEnabled, setImageViewEnabled] = useState(false);

  const [collageIndex, setCollageIndex] = useState(0);
  const [collageViewEnabled, setCollageViewEnabled] = useState(false);

  const openCollageView = (index: number) => {
    setCollageIndex(index);
    setCollageViewEnabled(true);
  };

  const {
    type,
    name,
    overview,
    about,
    distance,
    rating,
    source,
    titleImages,
    price,
    images,
    availability,
    location,
    reviews,
  }: Props = route.params;

  return (
    <ScrollView contentContainerStyle={[localStyles.container, {width}]}>
      <ImageView
        images={titleImages.map((item: any) => item.image)}
        imageIndex={carouselIndex}
        visible={imageViewEnabled}
        presentationStyle="overFullScreen"
        onRequestClose={() => setImageViewEnabled(false)}
        FooterComponent={({imageIndex}: any) => (
          <Text
            style={[
              styles.semiBold,
              {color: colors.white, textAlign: 'center'},
            ]}>
            {imageIndex + 1} / {titleImages.length}
          </Text>
        )}
      />
      <ImageView
        images={images.map((item: any) => item.image)}
        imageIndex={collageIndex}
        visible={collageViewEnabled}
        presentationStyle="overFullScreen"
        onRequestClose={() => setCollageViewEnabled(false)}
        FooterComponent={({imageIndex}: any) => (
          <Text
            style={[
              styles.semiBold,
              {color: colors.white, textAlign: 'center'},
            ]}>
            {imageIndex + 1} / {images.length}
          </Text>
        )}
      />
      <View style={localStyles.carouselContainer}>
        {titleImages && (
          <>
            <View
              style={{
                position: 'absolute',
                top: 40,
                right: 20,
                flexDirection: 'row',
                zIndex: 10,
              }}>
              <Ionicons
                name="bookmarks-outline"
                size={24}
                color={colors.white}
              />
              <Feather
                name="link"
                size={24}
                color={colors.white}
                style={{marginLeft: 20}}
              />
            </View>
            <Carousel
              data={titleImages}
              currentIndex={carouselIndex}
              setCurrentIndex={setCarouselIndex}
              renderItem={({item}: any) => (
                <Pressable
                  style={[localStyles.carouselItem, {width}]}
                  onPress={() => setImageViewEnabled(true)}>
                  <Image source={item.image} style={localStyles.image} />
                </Pressable>
              )}
              showPagination
            />
          </>
        )}
      </View>
      <View style={[localStyles.wrapper, {marginBottom: 20}]}>
        <Text
          style={[
            styles.bold,
            {
              fontFamily: fonts.extraBold,
              color: colors.darkGrey,
              marginBottom: 10,
            },
          ]}>
          {name}
        </Text>
        <Rating rating={rating} maxRating={5} />
      </View>
      <PageDivider showPagination pages={['Overview', 'Reviews']}>
        <View style={localStyles.wrapper}>
          <Text
            style={[
              styles.semiBold,
              {color: colors.darkGrey, marginBottom: 10},
            ]}>
            OVERVIEW
          </Text>
          <Text style={[styles.regular, {color: colors.darkGrey}]}>
            {overview}
          </Text>
          <Text
            style={[
              styles.semiBold,
              {color: colors.darkGrey, marginTop: 30, marginBottom: 10},
            ]}>
            ABOUT
          </Text>
          <Text style={[styles.regular, {color: colors.darkGrey}]}>
            {about}
          </Text>
          <View style={localStyles.imagesContainer}>
            <ImageCollage
              images={images.map((item, index) => item.image)}
              openCollageView={openCollageView}
            />
          </View>
          {location && (
            <Pressable
              style={[localStyles.mapContainer, {width: width - 40}]}
              onPress={() => navigation.navigate('Maps')}>
              <LinearGradient
                colors={['#ffffffff', '#ffffff67', '#ffffffff']}
                style={localStyles.linearGradient}
              />
              <MapView
                style={localStyles.map}
                provider={PROVIDER_GOOGLE}
                region={{
                  latitude: location.latlng.latitude,
                  longitude: location.latlng.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={location.latlng}
                  title={location.title}
                  description={location.description}
                />
              </MapView>
              <View style={localStyles.mapBottomButtonsContainer}>
                <View style={localStyles.directionButton}>
                  <Entypo name="direction" size={20} color={colors.orange} />
                  <Text
                    style={[
                      styles.regular,
                      {color: colors.orange, fontSize: 16, marginLeft: 5},
                    ]}>
                    GET DIRECTIONS
                  </Text>
                </View>
                <View style={localStyles.mapButton}>
                  <MaterialIcons
                    name="phone-in-talk"
                    size={20}
                    color={colors.orange}
                  />
                </View>
                <View style={localStyles.mapButton}>
                  <Entypo name="chat" size={20} color={colors.orange} />
                </View>
              </View>
            </Pressable>
          )}
          {type !== 'ride' && (
            <StyledButton
              title={
                type === 'park'
                  ? 'BOOK TICKETS'
                  : type === 'restaurant'
                  ? 'ORDER NOW'
                  : ''
              }
              style={{
                backgroundColor: colors.orange,
                marginHorizontal: 0,
                height: 50,
                marginTop: 20,
                marginBottom: 30,
              }}
              onPress={() => {
                if (type === 'restaurant') {
                  navigation.navigate('Search', {
                    type: 'food',
                    data: food,
                  });
                } else if (type === 'park') {
                  navigation.navigate('Checkout', {
                    type: type,
                    cartItemsFromProps: [
                      {
                        type: type,
                        name: name,
                        overview: overview,
                        about: about,
                        distance: distance,
                        rating: rating,
                        source: source,
                        titleImages: titleImages,
                        price: price,
                        images: images,
                        availability: availability,
                        location: location,
                        reviews: reviews,
                        numberOfItems: 1,
                      },
                    ],
                  });
                }
              }}
            />
          )}
        </View>
        {reviews && (
          <View style={localStyles.reviewContainer}>
            {reviews.map((review: IReview, index: number) => (
              <ReviewCard
                key={index}
                name={review.name}
                review={review.review}
                rating={review.rating}
                image={review.image}
                timeStamp={review.timeStamp}
              />
            ))}
          </View>
        )}
      </PageDivider>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  carouselContainer: {
    width: '100%',
    height: 500,
    marginBottom: 30,
    position: 'relative',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  reviewContainer: {
    marginHorizontal: 20,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    marginTop: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    width: '100%',
    height: '100%',
  },
  mapBottomButtonsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 4,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  directionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: colors.lightOrange,
  },
  mapButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.lightOrange,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  imagesContainer: {
    marginTop: 30,
    marginBottom: 30,
    width: '100%',
    height: 180,
  },
});
