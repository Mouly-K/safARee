import React, {useRef, useState, useEffect} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import {colors} from '../../styles/colors';
import { fonts } from "../../styles/fonts";
import { fontSizes } from "../../styles/fontSizes";

const OTPInput = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
  containerStyle,
  innerContainerStyle,
}: any) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef<TextInput>(null);

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);
  const boxDigit = (_: any, index: any) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    if (isInputBoxFocused && isValueFocused) {
      return (
        <View style={[styles.splitBoxes, styles.splitBoxesFocused]} key={index}>
          <Text style={styles.splitBoxText}>{digit}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.splitBoxes} key={index}>
          <Text style={styles.splitBoxText}>{digit}</Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.OTPInputContainer, containerStyle]}>
      <Pressable
        style={[styles.splitOTPBoxesContainer, innerContainerStyle]}
        onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        style={styles.textInputHidden}
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  OTPInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputHidden: {
    position: 'absolute',
    opacity: 0,
  },
  splitOTPBoxesContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  splitBoxes: {
    // borderColor: colors.grey,
    // borderWidth: 1,
    // elevation: 1.5,
    borderColor: colors.lightGrey,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    minWidth: 50,
  },
  splitBoxesFocused: {
    // borderColor: colors.almostWhite,
    // backgroundColor: colors.almostWhite,
    borderColor: colors.orange,
  },
  splitBoxText: {
    fontSize: 20,
    fontFamily: fonts.bold,
    textAlign: 'center',
    color: colors.darkGrey,
  },
});

export default OTPInput;
