import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors} from '../../styles/colors';
import {styles} from '../../styles/styles';
import {locationData} from '../../data/data';
import {IMarker} from '../../utils';

import SearchIcon from '../../assets/search.svg';
import MapLocate from '../../assets/map-locate-2.svg';

const MapSearch = forwardRef((props: any, ref) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['40%', '95%'], []);

  // callbacks
  const openModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const closeModalHandler = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  useImperativeHandle(ref, () => ({
    openModal() {
      openModalHandler();
    },
    closeModal() {
      closeModalHandler();
    },
  }));

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}>
      <View style={localStyles.searchBox}>
        <SearchIcon />
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Look around...."
          placeholderTextColor={colors.grey}
          style={[styles.regular, {color: colors.darkGrey}]}
        />
      </View>
      <ScrollView
        style={{flex: 1, flexGrow: 1}}
        contentContainerStyle={{paddingBottom: 40}}>
        <Pressable
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 20,
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: colors.white,
            ...styles.boxShadow,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => {
            props.onPress({
              title: 'Your Location',
              description: '',
              value: '0',
              latlng: {latitude: 0, longitude: 0},
            });
            closeModalHandler();
          }}>
          <MapLocate />
          <Text
            style={[styles.semiBold, {color: colors.orange, paddingLeft: 10}]}>
            Your Location
          </Text>
        </Pressable>
        <Text
          style={[
            styles.bold,
            {
              marginTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              color: colors.darkGrey,
            },
          ]}>
          TODAY
        </Text>
        {locationData.map((location: any, index: number) => {
          if (
            location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.city.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  props.onPress({
                    title: location.address,
                    description: location.city,
                    value: '0',
                    latlng: location.latlng,
                  });
                  closeModalHandler();
                }}>
                <View
                  style={[
                    styles.boxShadow,
                    {
                      backgroundColor: colors.white,
                      marginHorizontal: 20,
                      marginTop: 20,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    },
                  ]}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={location.image}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'cover',
                        borderRadius: 50,
                      }}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={[
                          styles.regular,
                          {
                            color: colors.darkGrey,
                          },
                        ]}>
                        {location.city}
                      </Text>
                      <Text
                        style={[
                          styles.semiBold,
                          {
                            color: colors.darkGrey,
                          },
                        ]}>
                        {location.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }
        })}
        <Text
          style={[
            styles.bold,
            {
              marginTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              color: colors.darkGrey,
            },
          ]}>
          RECENT
        </Text>
        {locationData.map((location: any, index: number) => {
          if (
            location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            location.city.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  props.onPress({
                    title: location.address,
                    description: location.city,
                    value: '0',
                    latlng: location.latlng,
                  });
                  closeModalHandler();
                }}>
                <View
                  style={[
                    styles.boxShadow,
                    {
                      backgroundColor: colors.white,
                      marginHorizontal: 20,
                      marginTop: 20,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      borderRadius: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    },
                  ]}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={location.image}
                      style={{
                        width: 50,
                        height: 50,
                        resizeMode: 'cover',
                        borderRadius: 50,
                      }}
                    />
                    <View style={{marginLeft: 10}}>
                      <Text
                        style={[
                          styles.regular,
                          {
                            color: colors.darkGrey,
                          },
                        ]}>
                        {location.city}
                      </Text>
                      <Text
                        style={[
                          styles.semiBold,
                          {
                            color: colors.darkGrey,
                          },
                        ]}>
                        {location.name}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }
        })}
      </ScrollView>
    </BottomSheetModal>
  );
});

export const localStyles = StyleSheet.create({
  searchBox: {
    marginHorizontal: 20,
    marginTop: 20,
    ...styles.boxShadow,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});

export default MapSearch;
