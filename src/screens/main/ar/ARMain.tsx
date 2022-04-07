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
} from 'react-native';
import React, {useEffect, useState, useCallback, useMemo, useRef} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {colors} from '../../../styles/colors';
import {fonts} from '../../../styles/fonts';
import {styles} from '../../../styles/styles';
import {rides} from '../../../data/data';

import Rating from '../../../components/General/Rating';

import KamikazeRanger from '../../../assets/kamikaze-ranger.jpg';
import TigerImage from '../../../assets/tiger-image.jpg';
import ARWeirdIcon from '../../../assets/ar-weird-icon.svg';
import MapIcon from '../../../assets/map-icon.svg';
import Oval1 from '../../../assets/oval1.svg';
import Oval2 from '../../../assets/oval2.svg';
import Oval3 from '../../../assets/oval3.svg';
import InfoIcon from '../../../assets/info-icon.svg';

export default function ARMain(props: any) {
  const {width} = useWindowDimensions();

  const [state, setState] = useState('tutorial1');
  // Possible states are 'tutorial1', 'tutorial2', 'tutorial3', 'recognizing', 'recognized', 'zoo'

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['15%'], []);

  // callbacks
  const openModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      return () => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor(colors.white);
      };
    }, []),
  );

  return (
    <BottomSheetModalProvider>
      <View style={localStyles.arContainer}>
        <Image
          source={state !== 'zoo' ? KamikazeRanger : TigerImage}
          style={[
            localStyles.backgroundImage,
            {
              opacity:
                state === 'tutorial1' ||
                state === 'tutorial2' ||
                state === 'tutorial3'
                  ? 0.5
                  : 0.9,
            },
          ]}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            padding: 20,
            paddingTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Pressable
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              borderRadius: 20,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3,
            }}
            onPress={() => props.navigation.goBack()}>
            <AntDesign name="close" size={24} color={colors.white} />
          </Pressable>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Fontisto name="map-marker-alt" size={16} color={colors.white} />
            <Text
              style={[
                styles.semiBold,
                {color: colors.white, paddingLeft: 5, fontSize: 14},
              ]}>
              Kamikaze Ranger
            </Text>
            {state === 'tutorial1' && (
              <View style={[localStyles.card, {bottom: -170, left: -20}]}>
                <View>
                  <View style={[styles.rowBetween, {width: '100%'}]}>
                    <Text style={styles.semiBold}>Current City</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          styles.small,
                          {color: '#d0c9d6', marginRight: 10},
                        ]}>
                        1/3
                      </Text>
                      <Oval1 />
                    </View>
                  </View>
                  <Text style={[styles.regular, {marginTop: 5}]}>
                    Here is your current city, we used your VPS data to located
                    this location.
                  </Text>
                </View>
                <Pressable onPress={() => setState('tutorial2')}>
                  <Text style={[styles.regular, {color: colors.orange}]}>
                    COOl, GOT IT!
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
          <Pressable
            style={{
              backgroundColor:
                state !== 'zoo' ? 'rgba(255, 255, 255, 0.25)' : colors.orange,
              borderRadius: 20,
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3,
              position: 'relative',
            }}
            onPress={() => props.navigation.goBack()}>
            <ARWeirdIcon />
            {state === 'tutorial2' && (
              <View style={[localStyles.card, {bottom: -170, right: -10}]}>
                <View>
                  <View style={[styles.rowBetween, {width: '100%'}]}>
                    <Text style={styles.semiBold}>See detailed</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={[
                          styles.small,
                          {color: '#d0c9d6', marginRight: 10},
                        ]}>
                        2/3
                      </Text>
                      <Oval2 />
                    </View>
                  </View>
                  <Text style={[styles.regular, {marginTop: 5}]}>
                    Tap this icon to see more details information.
                  </Text>
                </View>
                <Pressable onPress={() => setState('tutorial3')}>
                  <Text style={[styles.regular, {color: colors.orange}]}>
                    OK. WHAT'S NEXT?
                  </Text>
                </Pressable>
              </View>
            )}
          </Pressable>
        </View>
        {state !== 'recognizing' && state !== 'zoo' && (
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3,
              position: 'absolute',
              width: 50,
              height: 50,
              bottom: 20,
              right: 20,
            }}>
            <MapIcon />
          </View>
        )}
        {state === 'tutorial3' && (
          <View style={[localStyles.card, {bottom: 100, right: 10}]}>
            <View>
              <View style={[styles.rowBetween, {width: '100%'}]}>
                <Text style={styles.semiBold}>See detailed</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[styles.small, {color: '#d0c9d6', marginRight: 10}]}>
                    3/3
                  </Text>
                  <Oval3 />
                </View>
              </View>
              <Text style={[styles.regular, {marginTop: 5}]}>
                Tap this icon to see more details information.
              </Text>
            </View>
            <Pressable onPress={() => setState('recognizing')}>
              <Text style={[styles.regular, {color: colors.orange}]}>
                OK. WHAT'S NEXT?
              </Text>
            </Pressable>
          </View>
        )}
        {state === 'recognizing' && (
          <Pressable
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
            }}
            onPress={() => {
              setState('recognized');
              openModal();
            }}>
            <Text
              style={[
                styles.regular,
                {
                  color: colors.white,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: 10,
                  marginHorizontal: 15,
                  marginBottom: 20,
                  borderRadius: 15,
                  textAlign: 'center',
                },
              ]}>
              AR Camera is recognizing location, please hold your phone stable
              for 5 seconds...
            </Text>
          </Pressable>
        )}
        {state === 'zoo' && (
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
            }}>
            <View
              style={{
                backgroundColor: colors.white,
                paddingHorizontal: 15,
                paddingVertical: 20,
                marginHorizontal: 15,
                marginBottom: 20,
                borderRadius: 15,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={TigerImage}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 15,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={{marginLeft: 20, flex: 1}}>
                <Text style={[styles.bold, {fontSize: 18}]}>Tiger</Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Rating rating={5} maxRating={5} />
                  <Text style={[styles.regular, {marginLeft: 5}]}>
                    25 reviews
                  </Text>
                </View>
                <Text style={[styles.small, {color: colors.black}]}>
                  The Vandalur Zoo is home to both Bengal and white tigers.
                  Bengal tigers are orange with black stripes...
                </Text>
              </View>
            </View>
          </View>
        )}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Pressable
                onPress={() => {
                  closeModal();
                  setState('zoo');
                }}>
                <Image
                  source={KamikazeRanger}
                  style={{
                    width: 65,
                    height: 65,
                    borderRadius: 15,
                    resizeMode: 'cover',
                  }}
                />
              </Pressable>
              <View style={{marginLeft: 20}}>
                <Text style={[styles.bold, {fontSize: 18}]}>
                  Kamikaze Ranger
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Rating rating={5} maxRating={5} />
                  <Text style={[styles.regular, {marginLeft: 5}]}>
                    25 reviews
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={{
                backgroundColor: colors.lightOrange,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 18,
              }}
              onPress={() => props.navigation.navigate('Details', rides[6])}>
              <InfoIcon />
            </Pressable>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const localStyles = StyleSheet.create({
  arContainer: {
    flex: 1,
    posression: 'relative',
    backgroundColor: colors.black,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  card: {
    position: 'absolute',
    width: 250,
    height: 150,
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
