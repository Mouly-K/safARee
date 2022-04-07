import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  StatusBar,
} from 'react-native';

import StyledButton from '../../components/General/StyledButton';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {onboardingSlides} from '../../data/data';

import Verified from '../../assets/verified.svg';

export default function RegistrationVerified(props: any) {
  return (
    <View style={localStyles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Verified />
      <View
        style={{
          marginTop: 20,
          width: '85%',
          marginHorizontal: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={localStyles.title}>Verified</Text>
        <Text style={localStyles.description}>
          Your account has been verified successfully
        </Text>
        <StyledButton
          title="EXPLORE NOW"
          style={{
            backgroundColor: colors.orange,
            marginHorizontal: 0,
            height: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
          onPress={() => props.navigation.navigate('MainApp')}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.extraBold,
    fontSize: 28,
    marginBottom: 10,
    color: colors.darkGrey,
    textAlign: 'center',
  },
  description: {
    fontFamily: fonts.regular,
    color: colors.grey,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
