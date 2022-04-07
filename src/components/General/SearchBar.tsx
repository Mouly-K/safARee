import {Pressable, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import SearchIcon from '../../assets/search.svg';

import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';
import {amusementParks} from '../../data/data';

export default function SearchBar() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        ...styles.boxShadow,
        marginTop: 25,
        width: '100%',
        height: 55,
        paddingHorizontal: 10,
        paddingVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.white,
      }}
      onPress={() =>
        navigation.navigate('Search', {type: 'park', data: amusementParks})
      }>
      <SearchIcon />
      <Text style={[styles.regular, {color: colors.grey, marginLeft: 10}]}>
        Look around...
      </Text>
    </Pressable>
  );
}
