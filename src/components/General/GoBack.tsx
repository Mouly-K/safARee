import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {fontSizes} from '../../styles/fontSizes';

export default function GoBack(props: any) {
  return (
    <Pressable style={localStyles.container} onPress={props.onPress}>
      <AntDesign name="left" size={20} color={colors.orange} />
      <Text style={localStyles.text}>Back</Text>
    </Pressable>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    color: colors.orange,
    fontSize: fontSizes.big,
    fontFamily: fonts.medium,
    marginLeft: 5,
  },
});
