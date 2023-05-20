import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {fontSizes} from '../../styles/fontSizes';

export default function MutableNumber(props: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: props.style === 'food' ? 5 : 0,
      }}>
      <Pressable
        onPress={() => {
          if (props.value > 0) props.onChange(props.value - 1);
        }}
        style={{
          backgroundColor: props.style === 'food' ? '#e3ba9d' : colors.orange,
          borderRadius: 50,
          width: props.style === 'food' ? 18 : 25,
          height: props.style === 'food' ? 18 : 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo
          name="minus"
          size={props.style === 'food' ? 14 : 18}
          color={colors.white}
        />
      </Pressable>
      <Text
        style={[
          styles.bold,
          {
            color: colors.black,
            fontSize: fontSizes.regular,
            paddingHorizontal: props.style === 'food' ? 5 : 10,
          },
        ]}>
        {props.value}
      </Text>
      <Pressable
        onPress={() => {
          if (props.value < 20) props.onChange(props.value + 1);
        }}
        style={{
          backgroundColor: props.style === 'food' ? '#e3ba9d' : colors.orange,
          borderRadius: 50,
          width: props.style === 'food' ? 18 : 25,
          height: props.style === 'food' ? 18 : 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo
          name="plus"
          size={props.style === 'food' ? 14 : 18}
          color={colors.white}
        />
      </Pressable>
    </View>
  );
}
