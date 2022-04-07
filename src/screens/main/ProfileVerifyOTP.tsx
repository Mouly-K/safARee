import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';

import StyledButton from '../../components/General/StyledButton';
import LoginWith from '../../components/General/LoginWith';
import RegInput from '../../components/General/RegInput';
import GoBack from '../../components/General/GoBack';
import OTPInput from '../../components/General/OTPInput';
import Countdown from '../../components/General/Countdown';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import Logo from '../../assets/logo.svg';

export default function ProfileVerifyOTP(props: any) {
  const {width} = useWindowDimensions();
  const countdownRef = useRef<any>(null);

  const {phoneNumber} = props.route.params;

  const [OTP, setOTP] = useState('');
  const [isOTPReady, setIsOTPReady] = useState(false);

  return (
    <View style={[localStyles.wrapper, {width}]}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={localStyles.logo} />
      <View style={localStyles.container}>
        <View>
          <Text style={localStyles.title}>Enter the verify code</Text>
          <Text style={localStyles.description}>
            We just send you a verify code via a phone +91 1234*****9
          </Text>
          <OTPInput
            code={OTP}
            setCode={(value: any) =>
              setOTP(state => value.replace(/[^0-9]/g, ''))
            }
            maximumLength={6}
            setIsPinReady={setIsOTPReady}
            containerStyle={{marginTop: 20}}
            innerContainerStyle={{width: '100%'}}
          />
          <Text style={localStyles.termsAndConditionsText}>
            The verify code will expire in{' '}
            <Countdown time={120} ref={countdownRef} />
          </Text>
          <Pressable
            style={localStyles.guestButton}
            onPress={() => {
              if (countdownRef?.current?.isFinished()) {
                setOTP('');
                countdownRef?.current?.reset();
              }
            }}>
            <Text style={localStyles.guestButtonText}>Resend Code</Text>
          </Pressable>
        </View>
        <StyledButton
          title="SUBMIT CODE"
          style={{
            backgroundColor: colors.orange,
            marginHorizontal: 0,
            height: 50,
            marginBottom: 20,
            marginTop: 20,
          }}
          onPress={() => {
            if (isOTPReady) props.navigation.navigate('Profile');
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
    marginTop: 20,
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
    marginBottom: 20,
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
    marginTop: 20,
  },
});
