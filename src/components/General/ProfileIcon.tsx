import {Image, View, Text} from 'react-native';
import React from 'react';

import {colors} from '../../styles/colors';
import {styles} from '../../styles/styles';

export default function ProfileIcon(props: any) {
  return (
    <View style={[{position: 'relative'}, props.style]}>
      <Image source={props.source} style={{width: 50, height: 50}} />
      <View
        style={{
          position: 'absolute',
          top: -10,
          left: -10,
          backgroundColor: colors.orange,
          width: 25,
          height: 25,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          borderColor: colors.white,
        }}>
        <Text style={[styles.small, {color: colors.white}]}>3</Text>
      </View>
    </View>
  );
}
