import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import StyledButton from '../../components/General/StyledButton';
import LoginWith from '../../components/General/LoginWith';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import Logo from '../../assets/logo.svg';

export default function Landing(props: any) {
  const {width} = useWindowDimensions();

  return (
    <View style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={localStyles.logo}>
        <Logo />
      </View>
      <View style={localStyles.container}>
        <View>
          <Text style={localStyles.title}>Welcome to safARee</Text>
          <Text style={localStyles.description}>
            Luxury is something everyone deserves from time to time.
          </Text>
          <StyledButton
            title="LOG IN"
            style={{
              backgroundColor: colors.orange,
              marginHorizontal: 0,
              height: 50,
              marginBottom: 20,
              marginTop: 40,
            }}
            onPress={() => props.navigation.navigate('Login')}
          />
          <StyledButton
            title="REGISTER"
            style={{
              backgroundColor: colors.lightOrange,
              marginHorizontal: 0,
              height: 50,
              marginBottom: 20,
            }}
            textStyle={{color: colors.orange}}
            onPress={() => props.navigation.navigate('Registration')}
          />
          <Pressable style={localStyles.guestButton}>
            <Entypo
              name="chevron-with-circle-right"
              size={20}
              color={colors.orange}
            />
            <Text style={localStyles.guestButtonText}>Continue as Guest</Text>
          </Pressable>
          <Text style={localStyles.termsAndConditionsText}>
            By creating a new account, you agree to our Terms of Services &
            Privacy Policy
          </Text>
        </View>
        <LoginWith />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: colors.backgroundColor,
  },
  logo: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.extraBold,
    fontSize: 28,
    marginBottom: 10,
    color: colors.darkGrey,
  },
  description: {
    fontFamily: fonts.regular,
    color: colors.grey,
  },
  guestButton: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginBottom: 10,
  },
  guestButtonText: {
    marginLeft: 5,
    textAlign: 'center',
    fontFamily: fonts.medium,
    color: colors.orange,
    textTransform: 'uppercase',
  },
  termsAndConditionsText: {
    textAlign: 'center',
    color: colors.darkGrey,
    fontFamily: fonts.regular,
    paddingHorizontal: 20,
  },
});
