import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';

import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';
import MutableNumber from '../General/MutableNumber';
import Rating from '../General/Rating';

export default function FoodCard(props: any) {
  return (
    <Pressable style={localStyles.wrapper} onPress={props.onPress}>
      <Image source={props.imageSource} style={localStyles.image} />
      <View style={localStyles.cardContent}>
        <Text style={[styles.semiBold, {color: colors.darkGrey}]}>
          {props.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.orange,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 10,
              marginTop: 8,
            }}>
            <Text
              style={[styles.semiBold, {color: colors.white, fontSize: 12}]}>
              ADD TO CART
            </Text>
            <MutableNumber
              style="food"
              value={props.numberOfItems}
              onChange={props.onNumberOfItemsChange}
            />
          </View>
          <Text style={{marginLeft: 10, marginTop: 5, color: colors.grey}}>
            ₹ {props.price}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Rating rating={props.rating} maxRating={5} />
          <Text style={{color: colors.grey}}>{props.reviews.length} reviews</Text>
        </View>
      </View>
    </Pressable>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: 350,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: colors.white,
    ...styles.boxShadow,
  },
  image: {
    width: 100,
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
  description: {
    fontSize: 13,
    maxHeight: 40,
    overflow: 'hidden',
  },
});
