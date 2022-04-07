import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {styles} from '../../styles/styles';
import {colors} from '../../styles/colors';

export default function WhereToGoCard(props: any) {
  return (
    <Pressable
      style={{marginRight: 20, width: 150, height: 180, position: 'relative'}}
      onPress={props.onPress}>
      <Image
        source={props.image}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: props.color,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <props.icon />
        <Text style={[styles.semiBold, {color: colors.white}]}>
          {props.title}
        </Text>
      </View>
    </Pressable>
  );
}
