import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import StyledButton from '../../components/General/StyledButton';
import LoginWith from '../../components/General/LoginWith';
import RegInput from '../../components/General/RegInput';
import GoBack from '../../components/General/GoBack';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import Logo from '../../assets/logo.svg';

import {validatePhoneNumber} from '../../utils';

export default function ForgotPassword(props: any) {
  const {width} = useWindowDimensions();

  const [personalDetails, setPersonalDetails] = useState({
    phoneNumber: '',
  });
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  return (
    <View style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <GoBack onPress={() => props.navigation.goBack()} />
      <View style={localStyles.logo}>
        <Logo />
      </View>
      <View style={localStyles.container}>
        <View>
          <Text style={localStyles.title}>Forgot Password?</Text>
          <Text style={localStyles.description}>
            Please enter your phone number below, we'll send you a code to reset
            your account's password
          </Text>
          <RegInput
            noTitle
            containerStyle={{marginTop: 30}}
            placeholder="Phone Number"
            maxLength={10}
            value={personalDetails.phoneNumber}
            onChange={(phoneNumber: any) =>
              setPersonalDetails(state => ({...state, phoneNumber}))
            }
            keyboardType="numeric"
            type="valid"
            errorText="Please enter a valid phone number"
            validateWith={validatePhoneNumber}
            setIsValid={setIsPhoneValid}
          />
        </View>
        <StyledButton
          title="CONTINUE"
          style={{
            backgroundColor: colors.orange,
            marginHorizontal: 0,
            height: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
          onPress={() => {
            if (isPhoneValid) {
              props.navigation.navigate('VerifyOTP', {
                phoneNumber: personalDetails.phoneNumber,
              });
            }
          }}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  logo: {
    paddingTop: 100,
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
    width: '100%',
    marginBottom: 10,
  },
  guestButtonText: {
    textAlign: 'center',
    fontFamily: fonts.medium,
    color: colors.orange,
    textTransform: 'capitalize',
  },
  termsAndConditionsText: {
    textAlign: 'center',
    color: colors.darkGrey,
    fontFamily: fonts.regular,
    paddingHorizontal: 20,
  },
});
