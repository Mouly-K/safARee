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

export default function Profile(props: any) {
  const {width} = useWindowDimensions();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={[localStyles.container, {width}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}>
            <Text
              style={[
                styles.bold,
                {textAlign: 'center', marginTop: 10, marginBottom: 10},
              ]}>
              Write Review
            </Text>
            <Rating rating={4} maxRating={5} />
            <View
              style={{
                borderWidth: 1,
                marginTop: 20,
                borderColor: colors.lightGrey,
                padding: 20,
                borderRadius: 10,
                width: 300,
                height: 200,
              }}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{
                  color: colors.darkGrey,
                }}
                placeholder="Write your review here..."
              />
            </View>
            <StyledButton
              title="POST REVIEW"
              style={{
                backgroundColor: colors.orange,
                marginHorizontal: 0,
                height: 50,
                marginTop: 20,
                marginBottom: 20,
                width: 300,
              }}
            />
            <Pressable
              onPress={() => {
                StatusBar.setBackgroundColor(colors.white);
                setModalVisible(false);
              }}>
              <Text style={[styles.regular, {color: colors.orange}]}>
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Avatar}
            style={{
              width: 75,
              height: 75,
              resizeMode: 'cover',
              borderRadius: 75,
            }}
          />
          <Pressable
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              backgroundColor: colors.red,
              borderRadius: 5,
            }}
            onPress={() => props.navigation.navigate('NewComer')}>
            <Text style={[styles.small, {color: colors.white}]}>NEW COMER</Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, marginLeft: 20}}>
            <Text style={[styles.bold, {color: colors.darkGrey}]}>
              User Name{' '}
              <AntDesign name="checkcircle" size={15} color={colors.green} />
            </Text>
            <Text style={[styles.regular, {color: colors.darkGrey}]}>
              Indian
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              marginTop: 10,
              flexDirection: 'row',
            }}>
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: colors.orange,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                marginRight: 5,
              }}
              onPress={() => props.navigation.navigate('EditProfile')}>
              <Text style={[styles.small, {color: colors.white}]}>
                EDIT PROFILE
              </Text>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: colors.white,
                borderWidth: 2,
                borderColor: colors.orange,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
              onPress={() => {
                StatusBar.setBackgroundColor('rgba(0,0,0,0.5)');
                setModalVisible(true);
              }}>
              <Text style={[styles.small, {color: colors.orange}]}>
                MESSAGE
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <PageDivider
        showPagination
        pages={['HISTORY', 'REVIEWS', 'STATIC', 'SAVED']}>
        <View style={localStyles.reviewContainer}>
          <Text>History</Text>
        </View>
        <View style={localStyles.reviewContainer}>
          {reviews.map((review: IReview, index: number) => (
            <ReviewCard
              key={index}
              name={review.name}
              review={review.review}
              rating={review.rating}
              image={review.image}
              timeStamp={review.timeStamp}
            />
          ))}
        </View>
        <View style={localStyles.reviewContainer}>
          <Text>Statics</Text>
        </View>
        <View style={localStyles.reviewContainer}>
          <Text>Saved</Text>
        </View>
      </PageDivider>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  reviewContainer: {
    marginHorizontal: 20,
    paddingBottom: 100,
  },
});
