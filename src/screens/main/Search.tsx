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
import React, {useState, useEffect, useRef} from 'react';

import GoBack from '../../components/General/GoBack';
import ProfileIcon from '../../components/General/ProfileIcon';
import ParkCard2 from '../../components/Parks/ParkCard2';

import Avatar from '../../assets/avatar.png';
import SearchIcon from '../../assets/search.svg';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {amusementParks} from '../../data/data';

export default function Search(props: any) {
  const {width} = useWindowDimensions();

  const textInputRef = useRef(null);

  const [search, setSearch] = useState('');

  useEffect(() => {
    textInputRef?.current?.focus();
  }, []);

  return (
    <View style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={[styles.rowBetween, {marginTop: 10, marginRight: 20}]}>
        <GoBack onPress={() => props.navigation.goBack()} />
        <ProfileIcon style={{marginTop: 10}} source={Avatar} />
      </View>
      <View style={localStyles.searchBox}>
        <SearchIcon />
        <TextInput
          ref={textInputRef}
          autoFocus
          placeholder="Look around...."
          placeholderTextColor={colors.grey}
          style={[styles.regular, {color: colors.darkGrey}]}
        />
      </View>
      <ScrollView style={localStyles.resultsContainer}>
        {amusementParks.map((item, index) => {
          return (
            <ParkCard2
              key={index}
              onPress={() => props.navigation.navigate('ParkDetails')}
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
    </View>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
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
