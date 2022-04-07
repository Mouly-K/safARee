import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {IReview} from '../../utils';

import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';

import Rating from './Rating';

export default function ReviewCard(props: IReview) {
  const {width} = useWindowDimensions();

  return (
    <Pressable style={localStyles.container}>
      <Image source={props.image} style={localStyles.image} />
      <View style={localStyles.innerContainer}>
        <View style={styles.rowBetween}>
          <Text style={[styles.semiBold, {color: colors.darkGrey}]}>
            {props.name}
          </Text>
          <Text style={styles.small}>{props.timeStamp}</Text>
        </View>
        <Text
          style={[
            styles.regular,
            {
              color: colors.darkGrey,
              paddingTop: 5,
              paddingBottom: 10,
              fontSize: 13,
            },
          ]}>
          {props.review}
        </Text>
        <Rating rating={props.rating} maxRating={5} />
      </View>
    </Pressable>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    ...styles.boxShadow,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 20,
    marginRight: 20,
  },
  innerContainer: {
    flexDirection: 'column',
    flex: 1,
  },
});
