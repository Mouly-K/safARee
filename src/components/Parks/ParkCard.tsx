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

export default function ParkCard(props: any) {
  return (
    <Pressable
      style={{
        marginRight: 20,
        width: 300,
        height: 180,
        position: 'relative',
      }}
      onPress={props.onPress}>
      <LinearGradient
        colors={['#ffa16ba9', '#ffa16b71', '#ffa16b2b']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
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
        }}
      />
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
          padding: 15,
        }}>
        <Text style={[styles.regular, {color: colors.white}]}>
          {props.availability}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[
              styles.bold,
              {color: colors.white, fontSize: fontSizes.semiExtraBig},
            ]}>
            {props.name}
          </Text>
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255, 0.3)',
              paddingHorizontal: 8,
              paddingVertical: 3,
              borderRadius: 50,
            }}>
            <FontAwesome name="rupee" size={18} color={colors.white} />
            <Text
              style={[styles.regular, {color: colors.white, marginLeft: 5}]}>
              {props.price}
            </Text>
          </View> */}
        </View>
      </View>
    </Pressable>
  );
}
