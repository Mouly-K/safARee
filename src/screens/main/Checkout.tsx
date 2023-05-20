import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-element-dropdown';

import DizzeeWorld from '../../assets/amusement-parks/dizzee-world.jpg';
import Voucher from '../../assets/voucher.svg';

import {generateBoxShadowStyle, ILatLng, IMarker, IReview} from '../../utils';
import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';
import {fontSizes} from '../../styles/fontSizes';
import MutableNumber from '../../components/General/MutableNumber';
import StyledButton from '../../components/General/StyledButton';
import {rides, food} from '../../data/data';

interface ICartItem {
  type: string;
  name: string;
  overview: string;
  about: string;
  distance: string;
  rating: string;
  source: any;
  titleImages: any[];
  price: string;
  images: any[];
  availability: string;
  location: IMarker;
  reviews: any[];
  numberOfItems: number;
}

interface IProps {
  type: string;
  cartItemsFromProps: ICartItem[];
}

const dateDropdownData = [
  {label: 'Today'},
  {label: 'Thurs, 1 June 2023'},
  {label: 'Fri, 2 June 2023'},
  {label: 'Sat, 3 June 2023'},
  {label: 'Sun, 4 June 2023'},
];

const timeDropdownData = [
  {label: '10:00 AM (IST)'},
  {label: '11:00 AM (IST)'},
  {label: '12:00 PM (IST)'},
  {label: '1:00 PM (IST)'},
  {label: '2:00 PM (IST)'},
  {label: '3:00 PM (IST)'},
  {label: '4:00 PM (IST)'},
  {label: '5:00 PM (IST)'},
  {label: '6:00 PM (IST)'},
];

export default function Checkout({route, navigation}: any) {
  const {type, cartItemsFromProps}: IProps = route.params;

  const [dateDropdownValue, setDateDropdownValue] = useState('Today');
  const [isDateDropdownFocus, setIsDateDropdownFocus] = useState(false);

  const [timeDropdownValue, setTimeDropdownValue] = useState('10:00 AM (IST)');
  const [isTimeDropdownFocus, setIsTimeDropdownFocus] = useState(false);

  const [cartItems, setCartItems] = useState<ICartItem[]>(cartItemsFromProps);

  useEffect(() => {
    setCartItems(route.params.cartItemsFromProps);
  }, [route.params]);

  return (
    <View style={localStyles.checkoutContainer}>
      <View style={localStyles.checkoutHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={24} color={colors.darkGrey} />
        </Pressable>
        <Text
          style={[
            styles.bold,
            {
              fontSize: 18,
              textAlign: 'center',
              flex: 1,
              marginRight: 20,
            },
          ]}>
          Checkout
        </Text>
      </View>
      <ScrollView style={localStyles.checkoutContentContainer}>
        {cartItems &&
          cartItems.map((item: ICartItem, index: number) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                marginBottom: 20,
              }}>
              <Image
                source={item.source}
                style={{width: 150, height: 150, borderRadius: 15}}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 20,
                  flex: 1,
                }}>
                <View style={styles.rowBetween}>
                  <Text style={[styles.extraBold, {fontSize: 16}]}>
                    {item.name || 'Sample Title'}
                  </Text>
                  <Text style={[styles.regular, {color: colors.darkGrey}]}>
                    ₹ {item.price}
                  </Text>
                </View>
                {type !== 'food' && (
                  <Text
                    style={[
                      styles.regular,
                      {
                        paddingTop: 10,
                        color: colors.darkGrey,
                      },
                    ]}
                    numberOfLines={3}
                    ellipsizeMode="tail">
                    {item.overview || 'Sample Description'}
                  </Text>
                )}
                {type === 'food' && (
                  <View style={{paddingTop: 10}}>
                    <MutableNumber
                      value={item.numberOfItems}
                      onChange={(value: number) => {
                        const newCartItems = [...cartItems];
                        newCartItems[index].numberOfItems = value;
                        setCartItems(newCartItems);
                      }}
                    />
                  </View>
                )}
              </View>
            </View>
          ))}
        <View
          style={{
            backgroundColor: '#f7f7f7',
            marginTop: 40,
            padding: 20,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: colors.grey,
          }}>
          <Text style={[styles.extraBold, {fontSize: fontSizes.big}]}>
            Non-refundable
          </Text>
          <Text
            style={[
              styles.bold,
              {
                fontSize: 12,
                color: colors.black,
                marginTop: 5,
              },
            ]}>
            You can not refund your payment when you cancel
          </Text>
        </View>
        {type === 'park' && (
          <>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginTop: 20,
                justifyContent: 'space-around',
              }}>
              <Dropdown
                style={localStyles.dropDown}
                placeholderStyle={styles.regular}
                selectedTextStyle={[
                  styles.semiBold,
                  {color: '#ffbb4d', textAlign: 'center', fontSize: 13},
                ]}
                iconColor="#ffbb4d"
                data={dateDropdownData}
                itemTextStyle={[styles.regular, {color: colors.black}]}
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isDateDropdownFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={dateDropdownValue}
                onFocus={() => setIsDateDropdownFocus(true)}
                onBlur={() => setIsDateDropdownFocus(false)}
                onChange={item => {
                  setDateDropdownValue(item.label);
                  setIsDateDropdownFocus(false);
                }}
              />
              <Dropdown
                style={[localStyles.dropDown, {marginLeft: 10}]}
                placeholderStyle={styles.regular}
                selectedTextStyle={[
                  styles.semiBold,
                  {color: '#ffbb4d', textAlign: 'center', fontSize: 13},
                ]}
                iconColor="#ffbb4d"
                data={timeDropdownData}
                itemTextStyle={[styles.regular, {color: colors.black}]}
                maxHeight={300}
                labelField="label"
                valueField="label"
                placeholder={!isTimeDropdownFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={timeDropdownValue}
                onFocus={() => setIsTimeDropdownFocus(true)}
                onBlur={() => setIsTimeDropdownFocus(false)}
                onChange={item => {
                  setTimeDropdownValue(item.label);
                  setIsTimeDropdownFocus(false);
                }}
              />
            </View>
            <View
              style={[
                styles.rowBetween,
                {
                  marginTop: 40,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderRadius: 15,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: colors.white,
                  ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 2),
                },
              ]}>
              <Text style={[styles.semiBold, {fontSize: 14}]}>Total Guest</Text>
              {cartItems && (
                <MutableNumber
                  value={cartItems[0].numberOfItems}
                  onChange={(numberOfItems: number) => {
                    const newCartItems = [...cartItems];
                    newCartItems[0].numberOfItems = numberOfItems;
                    setCartItems(newCartItems);
                  }}
                />
              )}
            </View>
          </>
        )}
        <View
          style={{
            backgroundColor: '#fcf7ef',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginTop: 30,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: '#ffbb4d',
          }}>
          <Voucher style={{marginTop: 5}} />
          <View style={[styles.rowBetween, {flex: 1}]}>
            <Text style={[styles.semiBold, {color: '#faa024', marginLeft: 5}]}>
              2 vouchers are applied
            </Text>
            <Entypo name="chevron-right" size={18} color="#faa024" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 20,
            borderRadius: 15,
            ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 2),
          }}>
          <Text style={[styles.semiBold, {marginTop: 30}]}>
            Payment Summary
          </Text>
          <View style={[styles.rowBetween, {flex: 1, marginTop: 15}]}>
            <Text style={[styles.semiBold, {fontSize: 14}]}>Subtotal</Text>
            <Text style={[styles.semiBold, {color: colors.grey, fontSize: 14}]}>
              ₹{' '}
              {cartItems &&
                cartItems.reduce(function (sum: number, item: any) {
                  return sum + item.price * item.numberOfItems;
                }, 0)}
            </Text>
          </View>
          <View style={[styles.rowBetween, {flex: 1, marginTop: 15}]}>
            <Text style={[styles.semiBold, {fontSize: 14}]}>
              Discount Total
            </Text>
            <Text style={[styles.semiBold, {color: colors.grey, fontSize: 14}]}>
              {'- ₹ 1000'}
            </Text>
          </View>
          <View style={[styles.rowBetween, {flex: 1, marginTop: 15}]}>
            <Text style={[styles.semiBold, {fontSize: 14}]}>Total Payment</Text>
            <Text style={[styles.semiBold, {color: colors.grey, fontSize: 14}]}>
              ₹{' '}
              {Math.max(
                0,
                cartItems &&
                  cartItems.reduce(function (sum: number, item: any) {
                    return sum + item.price * item.numberOfItems;
                  }, -1000),
              )}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: '#fffaf2',
              borderWidth: 2,
              borderColor: '#f9a01b',
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text style={[styles.semiBold, {color: '#f9a01b', fontSize: 12}]}>
              Thinkable ₹ 200
            </Text>
          </View>
          <Entypo name="plus" size={18} color={colors.black} />
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: '#f5fbf5',
              borderWidth: 2,
              borderColor: '#5dba5b',
              borderRadius: 10,
              marginLeft: 10,
            }}>
            <Text style={[styles.semiBold, {color: '#5dba5b', fontSize: 12}]}>
              Cash ₹{' '}
              {Math.max(
                0,
                cartItems &&
                  cartItems.reduce(function (sum: number, item: any) {
                    return sum + item.price * item.numberOfItems;
                  }, -1000),
              )}
            </Text>
          </View>
        </View>
        <StyledButton
          title={type === 'park' ? 'Buy Ticket' : type === 'food' ? 'Pay' : ''}
          style={{
            backgroundColor: colors.orange,
            marginHorizontal: 0,
            height: 50,
            marginTop: 20,
            marginBottom: 60,
          }}
          onPress={() => {
            if (type === 'park')
              navigation.navigate('Search', {type: 'ride', data: rides});
            else if (type === 'food')
              navigation.navigate('Search', {type: 'food', data: food});
          }}
        />
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  checkoutContainer: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  checkoutHeader: {
    height: 50,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    ...styles.boxShadow,
  },
  checkoutContentContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  dropDown: {
    height: 35,
    flex: 1,
    borderWidth: 3,
    backgroundColor: '#fffaf2',
    borderColor: '#ffbb4d',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius: 10,
  },
});
