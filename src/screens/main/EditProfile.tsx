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
import {Dropdown} from 'react-native-element-dropdown';

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
import {TextInput} from 'react-native-gesture-handler';

import ProTravelImage from '../../assets/profiles_etc_75-80/protravel.png';
import NewComerImage from '../../assets/profiles_etc_75-80/newcomer.png';
import NewComer2Image from '../../assets/profiles_etc_75-80/newcomer2.png';

const languageData = [{label: 'English'}, {label: 'Tamil'}, {label: 'Hindi'}];
const currencyData = [
  {label: 'US Dollars'},
  {label: 'Indian Rupee'},
  {label: 'Euros'},
];

export default function EditProfile(props: any) {
  const [state, setState] = useState('default');

  const [languageDropDownValue, setLanguagelanguageDropDownValue] =
    useState('English');
  const [isLanguageDropDownFocus, setIsLanguageDropDownFocus] = useState(false);

  const [currencyDropDownValue, setCurrencyDropDownValue] =
    useState('US Dollars');
  const [isCurrencyDropDownFocus, setIsCurrencyDropDownFocus] = useState(false);

  return (
    <View style={localStyles.container}>
      <View style={localStyles.header}>
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <Text style={[styles.regular, {color: colors.black}]}>Cancel</Text>
        </Pressable>
        <Text style={[styles.semiBold, {color: colors.black, paddingLeft: 10}]}>
          Edit Profile
        </Text>
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <Text style={[styles.regular, {color: colors.orange}]}>Done</Text>
        </Pressable>
      </View>
      <ScrollView style={{flex: 1, flexGrow: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Pressable
            style={{position: 'relative'}}
            onPress={() =>
              props.navigation.navigate('EditProfileVerification', {
                type: 'Profile',
              })
            }>
            <Image
              source={Avatar}
              style={{width: 75, height: 75, borderRadius: 75}}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 24,
                height: 24,
                borderWidth: 2,
                borderColor: colors.white,
                backgroundColor: colors.green,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons name="edit" size={14} color={colors.white} />
            </View>
          </Pressable>
        </View>
        <Text
          style={[
            styles.semiBold,
            {textAlign: 'center', color: colors.orange, marginVertical: 20},
          ]}>
          User Name
        </Text>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottomWidth: 1,
            borderColor: colors.lightGrey,
          }}
          onPress={() =>
            props.navigation.navigate('EditProfileVerification', {
              type: 'Profile',
            })
          }>
          <Text style={[styles.regular, {color: colors.black}]}>Profile</Text>
          <AntDesign name="right" size={12} color={colors.black} />
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottomWidth: 1,
            borderColor: colors.lightGrey,
          }}
          onPress={() =>
            props.navigation.navigate('EditProfileVerification', {
              type: 'Notifications',
            })
          }>
          <Text style={[styles.regular, {color: colors.black}]}>
            Notifications Settings
          </Text>
          <AntDesign name="right" size={12} color={colors.black} />
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: colors.lightGrey,
          }}>
          <Text style={[styles.regular, {color: colors.black}]}>Language</Text>
          <Dropdown
            style={localStyles.dropDown}
            placeholderStyle={styles.regular}
            selectedTextStyle={[styles.regular, {color: colors.orange}]}
            data={languageData}
            itemTextStyle={[styles.regular, {color: colors.black}]}
            maxHeight={300}
            labelField="label"
            valueField="label"
            placeholder={!isLanguageDropDownFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={languageDropDownValue}
            onFocus={() => setIsLanguageDropDownFocus(true)}
            onBlur={() => setIsLanguageDropDownFocus(false)}
            onChange={item => {
              setLanguagelanguageDropDownValue(item.label);
              setIsLanguageDropDownFocus(false);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: colors.lightGrey,
          }}>
          <Text style={[styles.regular, {color: colors.black}]}>Currency</Text>
          <Dropdown
            style={[localStyles.dropDown, {width: 120}]}
            placeholderStyle={styles.regular}
            selectedTextStyle={[styles.regular, {color: colors.orange}]}
            data={currencyData}
            itemTextStyle={[styles.regular, {color: colors.black}]}
            maxHeight={300}
            labelField="label"
            valueField="label"
            placeholder={!isCurrencyDropDownFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={currencyDropDownValue}
            onFocus={() => setIsCurrencyDropDownFocus(true)}
            onBlur={() => setIsCurrencyDropDownFocus(false)}
            onChange={item => {
              setCurrencyDropDownValue(item.label);
              setIsCurrencyDropDownFocus(false);
            }}
          />
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
          <Text style={[styles.regular, {color: colors.black}]}>History</Text>
          <Text style={[styles.regular, {color: colors.orange}]}>
            Auto Save
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
          <Text style={[styles.regular, {color: colors.black}]}>
            What is AR Camera
          </Text>
          <AntDesign name="right" size={12} color={colors.black} />
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
          <Text style={[styles.regular, {color: colors.black}]}>
            Term & Condition
          </Text>
          <AntDesign name="right" size={12} color={colors.black} />
        </View>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottomWidth: 1,
            borderColor: colors.lightGrey,
          }}
          onPress={() =>
            props.navigation.navigate('EditProfileVerification', {
              type: 'Social Links',
            })
          }>
          <Text style={[styles.regular, {color: colors.black}]}>
            Social links
          </Text>
          <AntDesign name="right" size={12} color={colors.black} />
        </Pressable>
        <View style={{paddingHorizontal: 20, marginBottom: 30}}>
          <StyledButton
            title="LOG OUT"
            style={{
              backgroundColor: colors.orange,
              flex: 1,
              marginLeft: 0,
              height: 50,
              marginTop: 20,
            }}
            onPress={() => props.navigation.navigate('Login')}
          />
        </View>
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
    height: '8%',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dropDown: {
    width: 120,
    backgroundColor: colors.white,
    borderColor: colors.lightGrey,
  },
});
