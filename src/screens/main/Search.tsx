import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {useFocusEffect} from '@react-navigation/native';

import GoBack from '../../components/General/GoBack';
import ProfileIcon from '../../components/General/ProfileIcon';
import ParkCard2 from '../../components/Parks/ParkCard2';
import FoodCard from '../../components/Foods/FoodCard';
import RestaurantCard from '../../components/Restaurants/RestaurantCard';
import RideCard from '../../components/Rides/RideCard';
import Filter from '../../components/General/Filter';

import Avatar from '../../assets/avatar.png';
import SearchIcon from '../../assets/search.svg';
import CartIcon from '../../assets/18_search_list/cart_bottom.svg';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {IDetails} from '../../utils';

export default function Search(props: any) {
  const {width} = useWindowDimensions();

  const [type, setType] = useState();

  const textInputRef = useRef<TextInput>(null);

  const [detailsArray, setDetailsArray] = useState<IDetails[]>();

  const [searchQuery, setSearchQuery] = useState('');

  const [filters, setFilters] = useState({
    search: '',
    sortBy: '',
    rating: 0,
    priceRange: [200, 1000],
  });

  useEffect(() => {
    textInputRef?.current?.focus();
  }, []);

  useEffect(() => {
    if (filters.sortBy === '') return;

    const oldDetailsArray = [...detailsArray];

    if (filters.sortBy === 'Rating') {
      oldDetailsArray.sort((a, b) => b.rating - a.rating);
      setDetailsArray(oldDetailsArray);
    } else if (filters.sortBy === 'Price') {
      oldDetailsArray.sort((a, b) => a.price - b.price);
      setDetailsArray(oldDetailsArray);
    } else if (filters.sortBy === 'Distance') {
      oldDetailsArray.sort((a, b) => a.distance - b.distance);
      setDetailsArray(oldDetailsArray);
    }
  }, [filters]);

  useEffect(() => {
    setDetailsArray(props.route.params.data);
    setType(props.route.params.type);
  }, [props.route.params]);

  useFocusEffect(
    useCallback(() => {
      setSearchQuery('');
      setFilters({
        search: '',
        sortBy: '',
        rating: 0,
        priceRange: [200, 1000],
      });
    }, []),
  );

  return (
    <BottomSheetModalProvider>
      <View style={[localStyles.wrapper, {width}]}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <View style={[styles.rowBetween, {marginTop: 10, marginRight: 20}]}>
          <GoBack onPress={() => props.navigation.goBack()} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Filter type={type} setFilters={setFilters} />
            <ProfileIcon style={{marginTop: 10}} source={Avatar} />
          </View>
        </View>
        <View style={localStyles.searchBox}>
          <SearchIcon />
          <TextInput
            ref={textInputRef}
            autoFocus
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Look around...."
            placeholderTextColor={colors.grey}
            style={[styles.regular, {color: colors.darkGrey}]}
          />
        </View>
        <ScrollView style={localStyles.resultsContainer}>
          {detailsArray &&
            detailsArray.map((item, index) => {
              if (
                type === 'park' &&
                (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) &&
                (item.name
                  .toLowerCase()
                  .includes(filters.search.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(filters.search.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())) &&
                item.rating >= filters.rating &&
                item.price >= filters.priceRange[0] &&
                item.price <= filters.priceRange[1]
              ) {
                return (
                  <ParkCard2
                    key={index}
                    onPress={() =>
                      props.navigation.navigate('Details', {
                        type: item.type,
                        name: item.name,
                        overview: item.overview,
                        about: item.about,
                        distance: item.distance,
                        rating: item.rating,
                        source: item.source,
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
              } else if (
                type === 'restaurant' &&
                (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) &&
                (item.name
                  .toLowerCase()
                  .includes(filters.search.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(filters.search.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())) &&
                item.rating >= filters.rating
              ) {
                return (
                  <RestaurantCard
                    key={index}
                    onPress={() =>
                      props.navigation.navigate('Details', {
                        type: item.type,
                        name: item.name,
                        overview: item.overview,
                        about: item.about,
                        distance: item.distance,
                        rating: item.rating,
                        source: item.source,
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
              } else if (
                type === 'food' &&
                (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) &&
                (item.name
                  .toLowerCase()
                  .includes(filters.search.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(filters.search.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())) &&
                item.rating >= filters.rating &&
                item.price >= filters.priceRange[0] &&
                item.price <= filters.priceRange[1]
              ) {
                return (
                  <FoodCard
                    key={index}
                    name={item.name}
                    rating={item.rating}
                    distance={item.distance}
                    reviews={item.reviews}
                    price={item.price}
                    availability={item.availability}
                    imageSource={item.source}
                    numberOfItems={item.numberOfItems}
                    onNumberOfItemsChange={(value: number) => {
                      const newDetailsArray = [...detailsArray];
                      newDetailsArray[index].numberOfItems = value;
                      setDetailsArray(newDetailsArray);
                    }}
                  />
                );
              } else if (
                type === 'ride' &&
                (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) &&
                (item.name
                  .toLowerCase()
                  .includes(filters.search.toLowerCase()) ||
                  item.overview
                    .toLowerCase()
                    .includes(filters.search.toLowerCase()) ||
                  item.about
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())) &&
                item.rating >= filters.rating &&
                item.price >= filters.priceRange[0] &&
                item.price <= filters.priceRange[1]
              ) {
                return (
                  <RideCard
                    key={index}
                    onPress={() =>
                      props.navigation.navigate('Details', {
                        type: item.type,
                        name: item.name,
                        overview: item.overview,
                        about: item.about,
                        distance: item.distance,
                        rating: item.rating,
                        source: item.source,
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
              }
            })}
        </ScrollView>
        {type === 'food' && (
          <Pressable
            style={{
              position: 'absolute',
              bottom: 10,
              right: 20,
              width: 50,
              height: 50,
              backgroundColor: colors.orange,
              padding: 10,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              props.navigation.navigate('Checkout', {
                type: type,
                cartItemsFromProps: detailsArray?.filter(
                  obj => obj.numberOfItems && obj.numberOfItems > 0,
                ),
              });
            }}>
            <CartIcon />
          </Pressable>
        )}
      </View>
    </BottomSheetModalProvider>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    position: 'relative',
  },
  searchBox: {
    marginHorizontal: 20,
    marginTop: 20,
    ...styles.boxShadow,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  resultsContainer: {
    marginTop: 20,
  },
});
