import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {fontSizes} from '../../styles/fontSizes';

const StyledButton = (props: any) => {
  return (
    <Pressable style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.regular,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});

export default StyledButton;
