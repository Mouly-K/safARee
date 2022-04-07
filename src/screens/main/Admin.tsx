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
import Fontisto from 'react-native-vector-icons/Fontisto';

import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';

import {IReview} from '../../utils';
import {rides, food} from '../../data/data';

import ReviewCard from '../../components/General/ReviewCard';
import PageDivider from '../../components/General/PageDivider';
import StyledButton from '../../components/General/StyledButton';

import Avatar from '../../assets/avatar.png';
import {TextInput} from 'react-native-gesture-handler';

export default function Admin(props: any) {
  const {width} = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('RIDES');
  const [ticketPrice, setTicketPrice] = useState('300');

  const Card = (props: any) => {
    const [enabled, setEnabled] = useState(false);

    return (
      <View
        style={{
          padding: 15,
          backgroundColor: colors.white,
          ...styles.boxShadow,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={props.image}
            style={{
              width: 75,
              height: 75,
              resizeMode: 'cover',
              borderRadius: 15,
            }}
          />
          <Text
            style={[styles.semiBold, {color: colors.black, marginLeft: 20}]}>
            {props.name}
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
    <View
      style={{flex: 1, backgroundColor: colors.white, position: 'relative'}}>
      <View
        style={[styles.rowBetween, {marginHorizontal: 20, marginVertical: 40}]}>
        <Text style={localStyles.title}>MGM - ADMIN</Text>
        <Image
          source={Avatar}
          style={{width: 50, height: 50, borderRadius: 50, resizeMode: 'cover'}}
        />
      </View>
      <ScrollView contentContainerStyle={[localStyles.container, {width}]}>
        <PageDivider
          showPagination
          pages={['RIDES', 'DISHES']}
          setCurrentPage={setCurrentPage}>
          <View style={localStyles.reviewContainer}>
            {rides.map((ride: any, index: number) => (
              <Card key={index} name={ride.name} image={ride.source} />
            ))}
          </View>
          <View style={localStyles.reviewContainer}>
            {food.map((dish: any, index: number) => (
              <Card key={index} name={dish.name} image={dish.source} />
            ))}
          </View>
        </PageDivider>
      </ScrollView>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 20,
          left: 0,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginHorizontal: 5,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        {currentPage === 'RIDES' && (
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 40,
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.semiBold, {fontSize: 24}]}>
              Ticket Price : ₹
            </Text>
            <TextInput
              keyboardType="number-pad"
              value={ticketPrice}
              style={[
                styles.regular,
                {
                  borderWidth: 2,
                  borderColor: colors.orange,
                  width: 100,
                  height: 40,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  textAlign: 'right',
                  color: colors.black,
                },
              ]}
              onChange={setTicketPrice}
            />
          </View>
        )}
        <View style={{flexDirection: 'row'}}>
          <StyledButton
            title="UPDATE"
            style={{
              backgroundColor: colors.green,
              height: 50,
              marginLeft: 0,
              marginRight: 0,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingBottom: 200,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  reviewContainer: {
    marginHorizontal: 20,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.darkGrey,
    marginBottom: 5,
  },
  description: {
    fontFamily: fonts.regular,
    color: colors.grey,
  },
});
