import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import MarkerToMarker from '../../assets/marker-to-marker.svg';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {fontSizes} from '../../styles/fontSizes';

export default function RestaurantCard(props: any) {
  return (
    <Pressable
      style={[
        {
          marginRight: 20,
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          height: 250,
          position: 'relative',
        },
        styles.boxShadow,
      ]}
      onPress={props.onPress}>
      <Image
        source={props.imageSource}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 80,
          left: 10,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255, 0.25)',
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 50,
          }}>
          <Text style={[styles.regular, {color: colors.white, marginRight: 5}]}>
            #restaurant
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding: 15,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MarkerToMarker />
          <Text style={[styles.regular, {color: colors.white}]}>
            {props.distance}km
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255, 0.1)',
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 50,
          }}>
          <Text style={[styles.regular, {color: colors.white, marginRight: 5}]}>
            {props.rating}
          </Text>
          <Fontisto name="star" size={18} color={colors.white} />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: colors.white,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text
          style={[
            styles.bold,
            {color: colors.orange, fontSize: fontSizes.semiExtraBig},
          ]}>
          {props.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={[styles.regular, {color: colors.grey}]}>
            {props.availability}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
