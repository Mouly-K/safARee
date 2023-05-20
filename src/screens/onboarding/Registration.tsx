import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Pressable,
  ScrollView,
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

import {
  isNumber,
  validateAlphabet,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from '../../utils';

export default function Login(props: any) {
  const {width} = useWindowDimensions();

  const [personalDetails, setPersonalDetails] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
  });
  const [isUserNameValid, setIsUserNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  return (
    <ScrollView style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <GoBack onPress={() => props.navigation.goBack()} />
      <View style={localStyles.logo}>
        <Logo />
      </View>
      <View style={localStyles.container}>
        <View>
          <Text style={localStyles.title}>Register new account</Text>
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="Username"
            secureTextEntry={false}
            autoCorrect={false}
            value={personalDetails.username}
            onChange={(username: string) =>
              setPersonalDetails(state => ({...state, username}))
            }
            type="valid"
            errorText="Please enter a valid username"
            validateWith={validateAlphabet}
            setIsValid={setIsUserNameValid}
          />
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            value={personalDetails.password}
            onChange={(password: string) =>
              setPersonalDetails(state => ({...state, password}))
            }
            type="valid"
            errorText="Please enter a valid password"
            validateWith={validatePassword}
            setIsValid={setIsPasswordValid}
          />
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="abcd@gmail.com"
            value={personalDetails.email}
            onChange={(email: string) =>
              setPersonalDetails(state => ({...state, email}))
            }
            type="valid"
            errorText="Please enter a valid email address"
            validateWith={validateEmail}
            setIsValid={setIsEmailValid}
          />
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="Phone Number"
            keyboardType="numeric"
            value={personalDetails.phone}
            onChange={(phone: string) =>
              setPersonalDetails(state => ({...state, phone}))
            }
            maxLength={10}
            type="valid"
            errorText="Please enter a valid phone number"
            validateWith={validatePhoneNumber}
            setIsValid={setIsPhoneValid}
          />
          <StyledButton
            title="REGISTER"
            style={{
              backgroundColor: colors.orange,
              marginHorizontal: 0,
              height: 50,
              marginBottom: 20,
              marginTop: 20,
            }}
            onPress={() => {
              if (
                isEmailValid &&
                isPasswordValid &&
                isUserNameValid &&
                isPhoneValid
              ) {
                props.navigation.navigate('RegistrationVerified');
              }
            }}
          />
          <Text style={localStyles.termsAndConditionsText}>
            Already have an account?
          </Text>
          <Pressable
            style={localStyles.guestButton}
            onPress={() => props.navigation.navigate('Login')}>
            <Text style={localStyles.guestButtonText}>Login</Text>
          </Pressable>
        </View>
        <LoginWith />
      </View>
    </ScrollView>
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
