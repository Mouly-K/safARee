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
import {TextInput} from 'react-native-gesture-handler';

import ProTravelImage from '../../assets/profiles_etc_75-80/protravel.png';
import NewComerImage from '../../assets/profiles_etc_75-80/newcomer.png';
import NewComer2Image from '../../assets/profiles_etc_75-80/newcomer2.png';

export default function NewComer(props: any) {
  const [state, setState] = useState('default');

  return (
    <View style={localStyles.container}>
      <Pressable
        style={localStyles.header}
        onPress={() => {
          if (state === 'default') props.navigation.navigate('Profile');
          else setState('default');
        }}>
        <AntDesign name="left" size={24} color={colors.black} />
        <Text style={[styles.semiBold, {color: colors.black, paddingLeft: 10}]}>
          {state === 'default' ? 'User Process' : 'Go to Pro'}
        </Text>
      </Pressable>
      <View style={{flex: 1, padding: 20}}>
        {state === 'proTravel' && (
          <View
            style={{
              flex: 1,
              backgroundColor: colors.white,
              paddingHorizontal: 20,
              marginBottom: 20,
              ...styles.boxShadow,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: colors.red,
                  borderRadius: 5,
                }}>
                <Text style={[styles.small, {color: colors.white}]}>
                  NEW COMER
                </Text>
              </View>
            </View>
            <Text style={[styles.bold, {marginTop: 20, fontSize: 30}]}>
              New Comer
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <Image source={NewComer2Image} />
            </View>
            <Text style={[styles.extraBold, {color: colors.black}]}>•</Text>
            <Text
              style={[styles.regular, {color: colors.black, paddingLeft: 20}]}>
              Thinkable - An Immersive View
            </Text>
            <Text
              style={[styles.extraBold, {color: colors.black, paddingTop: 40}]}>
              •
            </Text>
            <Text
              style={[styles.regular, {color: colors.black, paddingLeft: 20}]}>
              Thinkable - An Immersive View
            </Text>
            <StyledButton
              title="GO TO PRO"
              style={{
                backgroundColor: colors.orange,
                marginHorizontal: 0,
                height: 50,
                marginTop: 30,
                marginBottom: 20,
              }}
            />
          </View>
        )}
        {state === 'default' && (
          <>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: colors.white,
                paddingHorizontal: 10,
                marginBottom: 20,
                ...styles.boxShadow,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={NewComerImage} />
                <View style={{justifyContent: 'center'}}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: colors.red,
                        borderRadius: 5,
                      }}>
                      <Text style={[styles.small, {color: colors.white}]}>
                        NEW COMER
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.bold, {marginTop: 20, fontSize: 30}]}>
                    New Comer
                  </Text>
                </View>
              </View>
              <Text style={[styles.regular, {color: colors.black}]}>
                Thinkable - An Immersive View
              </Text>
              <StyledButton
                title="View More"
                style={{
                  backgroundColor: colors.orange,
                  marginHorizontal: 0,
                  height: 50,
                  marginBottom: 20,
                  width: 200,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                backgroundColor: colors.white,
                paddingHorizontal: 10,
                ...styles.boxShadow,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        backgroundColor: '#f59829',
                        borderRadius: 5,
                      }}>
                      <Text style={[styles.small, {color: colors.white}]}>
                        PRO TRAVEL
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.bold, {marginTop: 20, fontSize: 33}]}>
                    Pro Travel
                  </Text>
                </View>
                <Image source={ProTravelImage} />
              </View>
              <Text style={[styles.regular, {color: colors.black}]}>
                Thinkable - An Immersive View
              </Text>
              <StyledButton
                title="View More"
                style={{
                  backgroundColor: colors.orange,
                  marginHorizontal: 0,
                  height: 50,
                  marginBottom: 20,
                  width: 200,
                }}
                onPress={() => setState('proTravel')}
              />
            </View>
          </>
        )}
      </View>
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
});
