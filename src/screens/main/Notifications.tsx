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

export default function Notifications(props: any) {
  const {width} = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState('RIDES');

  const notifications = [
    {name: 'MGM Tickets', description: 'Use your tickets today!'},
    {name: 'MGM Restaurant', description: 'Pre-order your food now!'},
    {name: 'MGM Tickets', description: 'Use your tickets today!'},
    {name: 'MGM Restaurant', description: 'Pre-order your food now!'},
  ];

  const Card = (props: any) => {
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
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={[styles.semiBold, {color: colors.black}]}>
            {props.name}
          </Text>
          <Text
            style={[styles.regular, {color: colors.darkGrey, marginTop: 20}]}>
            {props.description}
          </Text>
        </View>
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            elevation: 5,
            borderRadius: 10,
          }}>
          <Ionicons name="notifications" size={15} color={colors.orange} />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{flex: 1, backgroundColor: colors.white, position: 'relative'}}>
      <Pressable
        style={{
          width: '100%',
          height: '10%',
          backgroundColor: colors.white,
          borderBottomWidth: 1,
          borderBottomColor: colors.lightGrey,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        onPress={() => {
          props.navigation.navigate('Explore');
        }}>
        <AntDesign name="left" size={24} color={colors.black} />
        <Text style={[styles.semiBold, {color: colors.black, paddingLeft: 10}]}>
          Notifications
        </Text>
      </Pressable>
      <ScrollView contentContainerStyle={[localStyles.container, {width}]}>
        <View style={localStyles.reviewContainer}>
          {notifications.map((notification: any, index: number) => (
            <Card
              key={index}
              name={notification.name}
              description={notification.description}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    marginTop: 20,
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
