import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {fontSizes} from '../../styles/fontSizes';

import {generateBoxShadowStyle} from '../../utils';

export default function LoginWith() {
  return (
    <View style={localStyles.container}>
      <Text
        style={[
          styles.regular,
          {color: colors.darkGrey, textAlign: 'center', marginBottom: 10},
        ]}>
        Or log in with
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Pressable style={[localStyles.button, {marginRight: 20}]} onPress={() => console.log("Login With Facebook")}>
          <AntDesign
            name="facebook-square"
            size={20}
            color={colors.facebookBlue}
          />
          <Text style={[localStyles.buttonText, {color: colors.facebookBlue}]}>
            Facebook
          </Text>
        </Pressable>
        <Pressable style={localStyles.button} onPress={() => console.log("Login With Google")}>
          <AntDesign name="google" size={20} color={colors.googleRed} />
          <Text style={[localStyles.buttonText, {color: colors.googleRed}]}>
            Google
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "50%",
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    ...styles.boxShadow,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: fontSizes.big,
    fontFamily: fonts.bold,
    color: colors.darkGrey,
  },
});
