import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Pressable,
  useWindowDimensions,
  BackHandler,
  Modal,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';

import {IReview} from '../../utils';
import {reviews} from '../../data/data';

import Rating from '../../components/General/Rating';
import ReviewCard from '../../components/General/ReviewCard';
import PageDivider from '../../components/General/PageDivider';
import StyledButton from '../../components/General/StyledButton';

import Avatar from '../../assets/avatar.png';
import GoogleIcon from '../../assets/google-icon.svg';
import {TextInput} from 'react-native-gesture-handler';

import ProTravelImage from '../../assets/profiles_etc_75-80/protravel.png';
import NewComerImage from '../../assets/profiles_etc_75-80/newcomer.png';
import NewComer2Image from '../../assets/profiles_etc_75-80/newcomer2.png';
import {Dropdown} from 'react-native-element-dropdown';

const countryData = [{label: 'India'}, {label: 'USA'}, {label: 'Chennai'}];

export default function EditProfileVerification(props: any) {
  const {type} = props.route.params;

  const [countryDropDownValue, setCountryDropDownValue] = useState('Chennai');
  const [isCountryDropDownFocus, setIsCountryDropDownFocus] = useState(false);

  const notificationsToggleData = [
    {
      title: 'Location-based notifications',
      description: 'aaa bbbb ccc dddd',
    },
    {
      title: 'About your review',
      description: 'aaa bbbb ccc dddd\neeeee ffff',
    },
    {
      title: 'Term update',
      description: 'aaaa bbbb cccc\ndddggg hhh',
    },
    {
      title: 'Reward',
      description: 'aaa bbb\nccc ffff',
    },
    {
      title: 'Do not receive any notifications',
      description: 'aaa bbb ccc dd\neeerr ttt yyy',
    },
  ];

  const NotificationToggleComponent = (props: any) => {
    const [enabled, setEnabled] = useState(false);

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          borderBottomWidth: 1,
          borderColor: colors.lightGrey,
        }}>
        <View>
          <Text style={[styles.semiBold, {color: colors.orange, fontSize: 18}]}>
            {props.title}
          </Text>
          <Text style={[styles.regular, {color: colors.black, marginTop: 10}]}>
            {props.description}
          </Text>
        </View>
        <Pressable
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: enabled ? colors.white : '#f7f5f9',
            elevation: enabled ? 5 : 0,
            borderRadius: 10,
          }}
          onPress={() => setEnabled(!enabled)}>
          <AntDesign
            name="check"
            size={15}
            color={enabled ? colors.orange : '#d0c9d6'}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={localStyles.container}>
      <Pressable
        style={localStyles.header}
        onPress={() => {
          props.navigation.navigate('EditProfile');
        }}>
        <AntDesign name="left" size={24} color={colors.black} />
        <Text style={[styles.semiBold, {color: colors.black, paddingLeft: 10}]}>
          {type}
        </Text>
      </Pressable>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent:
            type === 'Profile' ? 'space-between' : 'flex-start',
        }}>
        {type === 'Profile' && (
          <>
            <View>
              <Text
                style={[styles.bold, {marginTop: 20, paddingHorizontal: 20}]}>
                Edit Profile
              </Text>
              <Text
                style={[
                  styles.regular,
                  {
                    marginTop: 10,
                    color: colors.darkGrey,
                    paddingHorizontal: 20,
                  },
                ]}>
                This account has not been verified
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderColor: colors.lightGrey,
                  marginTop: 30,
                }}>
                <Text
                  style={[styles.regular, {color: colors.black, width: '40%'}]}>
                  Profile
                </Text>
                <Text style={[styles.regular, {color: colors.black}]}>
                  User Name
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderColor: colors.lightGrey,
                }}>
                <Text
                  style={[styles.regular, {color: colors.black, width: '40%'}]}>
                  Password
                </Text>
                <Text style={[styles.regular, {color: colors.black}]}>
                  *************
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderColor: colors.lightGrey,
                }}>
                <Text
                  style={[styles.regular, {color: colors.black, width: '40%'}]}>
                  Country
                </Text>
                <Dropdown
                  style={localStyles.dropDown}
                  placeholderStyle={styles.regular}
                  selectedTextStyle={[styles.regular, {color: colors.black}]}
                  data={countryData}
                  itemTextStyle={[styles.regular, {color: colors.black}]}
                  maxHeight={300}
                  labelField="label"
                  valueField="label"
                  placeholder={!isCountryDropDownFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={countryDropDownValue}
                  onFocus={() => setIsCountryDropDownFocus(true)}
                  onBlur={() => setIsCountryDropDownFocus(false)}
                  onChange={item => {
                    setCountryDropDownValue(item.label);
                    setIsCountryDropDownFocus(false);
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderColor: colors.lightGrey,
                }}>
                <Text
                  style={[styles.regular, {color: colors.black, width: '40%'}]}>
                  Email
                </Text>
                <Text style={[styles.regular, {color: colors.black}]}>
                  ssgggkkk@xyz.com
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderColor: colors.lightGrey,
                }}>
                <Text
                  style={[styles.regular, {color: colors.black, width: '40%'}]}>
                  Mobile
                </Text>
                <Text style={[styles.regular, {color: colors.black}]}>
                  123-456-789
                </Text>
              </View>
            </View>
            <View style={{marginHorizontal: 20, marginBottom: 20}}>
              <StyledButton
                title="Verify Now"
                style={{
                  backgroundColor: colors.green,
                  marginLeft: 0,
                  height: 50,
                  marginTop: 20,
                }}
                onPress={() =>
                  props.navigation.navigate('ProfileVerifyOTP', {
                    phoneNumber: '123456789',
                  })
                }
              />
            </View>
          </>
        )}
        {type === 'Notifications' &&
          notificationsToggleData.map((item: any, index: number) => (
            <NotificationToggleComponent
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        {type === 'Social Links' && (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                borderBottomWidth: 1,
                borderColor: colors.lightGrey,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AntDesign name="facebook-square" size={24} color="#3c5a99" />
                <Text
                  style={[
                    styles.regular,
                    {color: colors.black, marginLeft: 10},
                  ]}>
                  User Name
                </Text>
              </View>
              <Text style={[styles.regular, {color: colors.red}]}>
                Disconnect
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 20,
                borderBottomWidth: 1,
                borderColor: colors.lightGrey,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <GoogleIcon width={24} height={24} />
                <Text
                  style={[
                    styles.regular,
                    {color: colors.black, marginLeft: 10},
                  ]}>
                  Connect with Google
                </Text>
              </View>
              <Text style={[styles.regular, {color: colors.green}]}>
                Connect
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    width: '100%',
    height: '10%',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dropDown: {
    width: 120,
    backgroundColor: colors.white,
    borderColor: colors.lightGrey,
  },
});
