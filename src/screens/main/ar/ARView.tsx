import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  StatusBar,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';

import {colors} from '../../../styles/colors';
import {fonts} from '../../../styles/fonts';
import {styles} from '../../../styles/styles';

import StreetImage from '../../../assets/StreetView.jpg';

import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ARView() {
  const snapPoints = useMemo(() => ['15%'], []);
  const modalRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    modalRef.current?.present();
  }, []);
  const closeModal = useCallback(() => {
    modalRef.current?.dismiss();
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      openModal();
      return () => {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor(colors.white);
      };
    }, []),
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal ref={modalRef} index={0} snapPoints={snapPoints}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor: colors.lightOrange,
              }}>
              <Feather name="arrow-up" size={24} color={colors.orange} />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={[styles.bold, {fontSize: 18, color: colors.orange}]}>
                Heading to 5m
              </Text>
              <Text
                style={[styles.regular, {fontSize: 14, color: colors.orange}]}>
                Turn right
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={[styles.bold, {fontSize: 18, color: colors.black}]}>
              5 min
            </Text>
            <Text style={styles.regular}>ETA</Text>
          </View>
        </View>
      </BottomSheetModal>
      <View style={localStyles.container}>
        <Image source={StreetImage} style={localStyles.image} />
      </View>
    </BottomSheetModalProvider>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
