import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';

import ScatteredShowersIcon from '../../assets/scattered-showers.png';
import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';

export default function WeatherCard() {
  return (
    <Pressable style={localStyles.cardContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={ScatteredShowersIcon} style={localStyles.icon} />
        <View style={localStyles.cardContent}>
          <Text style={[styles.bold, {fontSize: 16, color: colors.darkGrey}]}>
            Scattered Showers
          </Text>
          <Text style={[styles.regular, {fontSize: 14}]}>
            Sunny intervals & light winds
          </Text>
        </View>
      </View>
      <Text style={[styles.bold, {fontSize: 16, color: colors.orange}]}>
        24°C
      </Text>
    </Pressable>
  );
}

const localStyles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
    ...styles.boxShadow,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    height: 50,
    width: 57,
    marginRight: 15,
  },
});
