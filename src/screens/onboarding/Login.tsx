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

import {validateEmail, validatePassword} from '../../utils';

export default function Login(props: any) {
  const {width} = useWindowDimensions();

  const [personalDetails, setPersonalDetails] = useState({
    email: '',
    password: '',
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  return (
    <View style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <GoBack onPress={() => props.navigation.goBack()} />
      <View style={localStyles.logo}>
        <Logo />
      </View>
      <View style={localStyles.container}>
        <View>
          <Text style={localStyles.title}>Welcome Back</Text>
          <Text style={localStyles.description}>
            Please log in to your account
          </Text>
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="abcd@gmail.com"
            value={personalDetails.email}
            onChange={(email: any) =>
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
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            value={personalDetails.password}
            onChange={(password: any) =>
              setPersonalDetails(state => ({...state, password}))
            }
            type="valid"
            errorText="Please enter a valid password"
            validateWith={validatePassword}
            setIsValid={setIsPasswordValid}
          />
          <Pressable
            style={{marginTop: 20}}
            onPress={() => props.navigation.navigate('ForgotPassword')}>
            <Text style={[styles.regular, {color: colors.orange}]}>
              Forgot Password?
            </Text>
          </Pressable>
          <StyledButton
            title="LOG IN"
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
                personalDetails.email === 'user@gmail.com' &&
                personalDetails.password === 'Password@123'
              ) {
                props.navigation.navigate('MainApp');
                // console.log('Login');
              } else if (
                isEmailValid &&
                isPasswordValid &&
                personalDetails.email === 'mgmadmin@gmail.com' &&
                personalDetails.password === 'MGMAdmin@123'
              ) {
                props.navigation.navigate('Admin');
                // console.log('Login');
              }
            }}
          />
          <Text style={localStyles.termsAndConditionsText}>
            Don't have an account?
          </Text>
          <Pressable
            style={localStyles.guestButton}
            onPress={() => props.navigation.navigate('Registration')}>
            <Text style={localStyles.guestButtonText}>Register Now</Text>
          </Pressable>
        </View>
        <LoginWith />
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
