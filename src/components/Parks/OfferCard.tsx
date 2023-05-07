import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';

import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';

export default function OfferCard(props: any) {
  return (
    <Pressable style={localStyles.wrapper} onPress={props.onPress}>
      <Image source={props.image} style={localStyles.image} />
      <View style={localStyles.cardContent}>
        <View style={localStyles.hashtagContainer}>
          {props.hashtags?.map((item: string, index: number) => (
            <Text
              key={index}
              style={[
                localStyles.hashtag,
                styles.small,
                {color: colors.orange},
              ]}>
              #{item}
            </Text>
          ))}
        </View>
        <Text
          style={[localStyles.title, styles.regular, {color: colors.darkGrey}]}>
          {props.title}
        </Text>
        <Text style={[styles.small, localStyles.description]}>
          {props.description}
        </Text>
      </View>
    </Pressable>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    width: 350,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: colors.white,
    ...styles.boxShadow,
  },
  image: {
    width: 120,
    height: '100%',
    objectFit: 'contain',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 210,
  },
  title: {
    marginBottom: 5,
    maxHeight: 40,
    overflow: 'hidden',
  },
  description: {
    fontSize: 13,
    maxHeight: 40,
    overflow: 'hidden',
  },
  hashtagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  hashtag: {marginRight: 5},
});
