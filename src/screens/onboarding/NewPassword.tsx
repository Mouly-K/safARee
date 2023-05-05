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
import RegInput from '../../components/General/RegInput';
import GoBack from '../../components/General/GoBack';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import Logo from '../../assets/logo.svg';

import {validatePassword} from '../../utils';

export default function NewPassword(props: any) {
  const {width} = useWindowDimensions();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  return (
    <View style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <GoBack onPress={() => props.navigation.goBack()} />
      <View style={localStyles.logo}>
        <Logo />
      </View>
      <View style={localStyles.container}>
        <View>
          <Text style={localStyles.title}>Create new Password</Text>
          <Text style={localStyles.description}>
            Please create a new password for your account
          </Text>
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            onChange={(password: any) => setPassword(password)}
            type="valid"
            errorText="Please enter a valid password"
            validateWith={validatePassword}
            setIsValid={setIsPasswordValid}
          />
          <RegInput
            noTitle
            containerStyle={{marginTop: 0}}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            value={confirmPassword}
            onChange={(password: any) => setConfirmPassword(password)}
            type="valid"
            errorText="Please make sure the passwords match"
            validateWith={(pwd: string) => password === pwd}
            setIsValid={setIsConfirmPasswordValid}
          />
        </View>
        <StyledButton
          title="DONE"
          style={{
            backgroundColor: colors.orange,
            marginHorizontal: 0,
            height: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
          onPress={() => {
            if (isPasswordValid && isConfirmPasswordValid) {
              props.navigation.navigate('Login');
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
