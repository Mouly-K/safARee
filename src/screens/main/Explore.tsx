import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {fontSizes} from '../../styles/fontSizes';
import {amusementParks, whereToGo, offers} from '../../data/data';

import Avatar from '../../assets/avatar.png';
import MarkerToMarker from '../../assets/marker-to-marker.svg';

import ProfileIcon from '../../components/General/ProfileIcon';
import SearchBar from '../../components/General/SearchBar';
import ParkCard from '../../components/Parks/ParkCard';
import WhereToGoCard from '../../components/Parks/WhereToGoCard';
import OfferCard from '../../components/Parks/OfferCard';
import WeatherCard from '../../components/General/WeatherCard';

export default function Explore(props: any) {
  const {width} = useWindowDimensions();

  const SectionDivider = (props: any) => {
    return (
      <View style={[styles.rowBetween, {marginTop: 25, marginBottom: 15}]}>
        <Text
          style={[
            styles.regular,
            {color: colors.darkGrey, textTransform: 'uppercase'},
          ]}>
          {props.title}
        </Text>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={props.onPressViewAll}>
          <Text
            style={[styles.regular, {color: colors.orange, paddingRight: 5}]}>
            View all
          </Text>
          <AntDesign name="right" size={16} color={colors.orange} />
        </Pressable>
      </View>
    );
  };

  return (
    <ScrollView style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={localStyles.container}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={localStyles.title}>Welcome User Name</Text>
            <Text style={localStyles.description}>
              You are in{' '}
              <Fontisto name="map-marker-alt" size={16} color={colors.orange} />
              <Text style={{color: colors.orange}}> Nanganallur, Chennai</Text>
            </Text>
          </View>
          <ProfileIcon source={Avatar} />
        </View>
        <SearchBar />
        <SectionDivider
          title="TOP DESTINATIONS"
          onPressViewAll={() => console.log('Top Destinations')}
        />
        <ScrollView horizontal>
          {amusementParks.map((item, index) => {
            return (
              <ParkCard
                key={index}
                onPress={() =>
                  props.navigation.navigate('Details', {
                    type: 'park',
                    name: item.name,
                    overview: item.overview,
                    about: item.about,
                    distance: item.distance,
                    rating: item.rating,
                    titleImages: item.titleImages,
                    price: item.price,
                    images: item.images,
                    availability: item.availability,
                    location: item.location,
                    reviews: item.reviews,
                  })
                }
                name={item.name}
                rating={item.rating}
                distance={item.distance}
                price={item.price}
                availability={item.availability}
                imageSource={item.source}
              />
            );
          })}
        </ScrollView>
        <SectionDivider
          title="WHERE TO GO"
          onPressViewAll={() => console.log('Where to go')}
        />
        <ScrollView horizontal>
          {whereToGo.map((item, index) => (
            <WhereToGoCard
              key={index}
              title={item.title}
              icon={item.icon}
              image={item.image}
              color={item.color}
            />
          ))}
        </ScrollView>
        <SectionDivider
          title="OFFERS"
          onPressViewAll={() => console.log('Offers')}
        />
        <ScrollView
          horizontal
          style={[styles.boxShadow, {backgroundColor: colors.white}]}>
          {offers.map((item, index) => (
            <OfferCard
              key={index}
              hashtags={item.hashtags}
              title={item.title}
              description={item.description}
              image={item.image}
              onPress={() => console.log('Offer')}
            />
          ))}
        </ScrollView>
        <SectionDivider
          title="WEATHER FOR TODAY"
          onPressViewAll={() => console.log('Weather for today')}
        />
        <WeatherCard />
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  logo: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.darkGrey,
    marginBottom: 5,
  },
  description: {
    fontFamily: fonts.regular,
    color: colors.grey,
  },
  guestButton: {
    width: '100%',
    marginBottom: 10,
  },
  guestButtonText: {
    textAlign: 'center',
    fontFamily: fonts.medium,
    color: colors.orange,
    textTransform: 'capitalize',
  },
  termsAndConditionsText: {
    textAlign: 'center',
    color: colors.darkGrey,
    fontFamily: fonts.regular,
    paddingHorizontal: 20,
  },
});
