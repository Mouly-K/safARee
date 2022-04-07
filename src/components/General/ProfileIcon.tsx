import {Image, View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../styles/colors';
import {styles} from '../../styles/styles';

export default function ProfileIcon(props: any) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[{position: 'relative'}, props.style]}
      onPress={() => navigation.navigate('Profile')}>
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
        <Text style={[styles.small, {color: colors.white}]}>4</Text>
      </View>
    </Pressable>
  );
}
