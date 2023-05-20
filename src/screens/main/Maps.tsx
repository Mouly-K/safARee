import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useWindowDimensions,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useRef, useEffect, useCallback, useMemo} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
  Circle,
} from 'react-native-maps';
import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import Geolocation from 'react-native-geolocation-service';
import {useFocusEffect} from '@react-navigation/native';

import MapSearch from '../../components/General/MapSearch';
import PageDivider from '../../components/General/PageDivider';
import {getDirectionsInformation} from '../../api/maps';

import {
  ILatLng,
  IMarker,
  defaultMarker,
  generateBoxShadowStyle,
  secondsToHrsMins,
  convertMetres,
  secondsToFutureTime,
} from '../../utils';
import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';

import MapLocate from '../../assets/map-locate.svg';
import MapSwitch from '../../assets/map-switch.svg';
import DirectionArrow from '../../assets/direction-arrow.svg';
import MapPin1 from '../../assets/map-pin-1.svg';
import UserLocationMarker from '../../assets/user-location-marker.svg';
import MapPin from '../../assets/map-pin.svg';
import MapPin2 from '../../assets/map-pin-2.svg';

import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Maps({route, navigation}: any) {
  const {width, height} = useWindowDimensions();

  // ref
  const directionsModalRef = useRef<BottomSheetModal>(null);
  const directionsInstructionsModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['15%'], []);
  const instructionsSnapPoints = useMemo(() => ['85%'], []);

  // callbacks
  const openDirectionsModal = useCallback(() => {
    directionsModalRef.current?.present();
  }, []);
  const closeDirectionsModal = useCallback(() => {
    directionsModalRef.current?.dismiss();
  }, []);

  const openDirectionsInstructionsModal = useCallback(() => {
    directionsInstructionsModalRef.current?.present();
  }, []);
  const closeDirectionsInstructionsModal = useCallback(() => {
    directionsInstructionsModalRef.current?.dismiss();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setSource(userLocation);
      setDestination(defaultMarker);
      setDirectionsInformation(null);
      setDirectionRoute(null);
      setTransportMode('');

      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 16),
          height: '8%',
        },
      });
      closeDirectionsModal();

      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
      return () => {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor(colors.white);
      };
    }, []),
  );

  const [locationPermissionGranted, setPermissionGranted] = useState(false);

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We rely on your GPS to get access to your location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Grant Permission',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionGranted(true);
        getUserLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          title: 'Your Location',
          description: 'We rely on GPS to locate you, you can reposition',
          value: '0',
          latlng: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
        setSource({
          title: 'Your Location',
          description: 'We rely on GPS to locate you, you can reposition',
          value: '0',
          latlng: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
        animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        return position.coords;
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const getDirectionIcon = (type: string, modifier: string) => {
    switch (type) {
      case 'turn':
        switch (modifier) {
          case 'left':
          case 'sharp left':
          case 'slight left':
            return (
              <Feather name="corner-up-left" size={24} color={colors.black} />
            );
          case 'uturn':
            return (
              <MaterialIcons
                name="arrow-u-down-left"
                size={24}
                color={colors.black}
              />
            );
          case 'right':
          case 'sharp right':
          case 'slight right':
            return (
              <Feather name="corner-up-right" size={24} color={colors.black} />
            );
          case 'straight':
            return <Feather name="arrow-up" size={24} color={colors.black} />;
          case 'none':
          default:
        }
      case 'merge':
        <MaterialIcons name="merge-type" size={24} color={colors.black} />;
      case 'roundabout':
      case 'rotary':
      case 'roundabout turn':
      case 'exit roundabout':
      case 'exit rotary':
        return (
          <MaterialCommunityIcons
            name="rotate-right"
            size={24}
            color={colors.black}
          />
        );
      case 'notification':
        return (
          <MaterialIcons name="notifications" size={24} color={colors.black} />
        );
      case 'fork':
        return (
          <MaterialCommunityIcons
            name="directions-fork"
            size={24}
            color={colors.black}
          />
        );
      case 'new name':
      case 'depart':
      case 'arrive':
      case 'on ramp':
      case 'off ramp':
      case 'end of road':
      case 'continue':
      default:
        return <FontAwesome name="road" size={24} color={colors.black} />;
    }
  };

  useEffect(() => {
    checkPermission();
    getUserLocation();
  }, []);

  const mapRef = useRef<MapView>(null);
  const sourceMapSearchRef = useRef<any>(null);
  const destinationMapSearchRef = useRef<any>(null);

  const [userLocation, setUserLocation] = useState<IMarker>(defaultMarker);
  const [source, setSource] = useState<IMarker>(defaultMarker);
  const [destination, setDestination] = useState<IMarker>(defaultMarker);
  const [directionsInformation, setDirectionsInformation] = useState<any>(null);
  const [directionRoute, setDirectionRoute] = useState<any>(null);
  const [transportMode, setTransportMode] = useState('');

  const animateToRegion = (latlng: ILatLng) => {
    mapRef.current?.animateToRegion({
      latitude: latlng.latitude,
      longitude: latlng.longitude,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  useEffect(() => {
    if (source.title === '' || destination.title === '') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
          ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 16),
          height: '8%',
        },
      });
      closeDirectionsModal();
    }
    if (source.title !== '' && destination.title !== '') {
      navigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
      openDirectionsModal();
    }
  }, [source, destination]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={directionsInstructionsModalRef}
        index={0}
        snapPoints={instructionsSnapPoints}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={{
                flex: 1,
                borderBottomWidth: transportMode === 'driving' ? 2 : 0,
                borderColor: colors.orange,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 15,
              }}
              onPress={() => {
                setTransportMode('driving');
                setDirectionRoute(directionsInformation.driving);
              }}>
              <FontAwesome5
                name="car"
                size={24}
                color={
                  transportMode === 'driving' ? colors.black : colors.darkGrey
                }
              />
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                borderBottomWidth: transportMode === 'walking' ? 2 : 0,
                borderColor: colors.orange,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 15,
              }}
              onPress={() => {
                setTransportMode('walking');
                setDirectionRoute(directionsInformation.walking);
              }}>
              <MaterialIcons
                name="directions-walk"
                size={24}
                color={
                  transportMode === 'walking' ? colors.black : colors.darkGrey
                }
              />
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                borderBottomWidth: transportMode === 'cycling' ? 2 : 0,
                borderColor: colors.orange,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 15,
              }}
              onPress={() => {
                setTransportMode('cycling');
                setDirectionRoute(directionsInformation.cycling);
              }}>
              <MaterialIcons
                name="directions-bike"
                size={24}
                color={
                  transportMode === 'cycling' ? colors.black : colors.darkGrey
                }
              />
            </Pressable>
          </View>
          <ScrollView style={{marginTop: 20, flex: 1, flexGrow: 1}}>
            {directionRoute?.directionInstructions?.map(
              (item: any, index: number) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      backgroundColor: colors.white,
                      padding: 10,
                      marginHorizontal: 20,
                      marginVertical: 5,
                      borderRadius: 10,
                      borderBottomWidth: 1,
                      borderColor: colors.lightGrey,
                    }}>
                    {getDirectionIcon(
                      item.maneuver.type,
                      item.maneuver.modifier,
                    )}
                    <View style={{flex: 1, marginLeft: 20}}>
                      <Text
                        style={[
                          styles.regular,
                          {color: colors.black, fontSize: 17},
                        ]}>
                        {item.maneuver.instruction}
                      </Text>
                      <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Text style={[styles.small, {color: colors.darkGrey}]}>
                          {convertMetres(item.distance)}
                          {' - '}
                        </Text>
                        <Text style={[styles.small, {color: colors.darkGrey}]}>
                          {secondsToHrsMins(item.duration)}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              },
            )}
          </ScrollView>
        </View>
      </BottomSheetModal>
      <BottomSheetModal
        ref={directionsModalRef}
        index={0}
        snapPoints={snapPoints}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          {transportMode === '' && (
            <>
              <Text style={[styles.semiBold, {maxWidth: '60%'}]}>
                {destination.title}
              </Text>
              <View style={{justifyContent: 'flex-start'}}>
                <Pressable
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.orange,
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                  onPress={() => {
                    getDirectionsInformation(source, destination).then(
                      response => {
                        setDirectionsInformation(response);
                        setDirectionRoute(response.driving);
                        setTransportMode('driving');
                      },
                    );
                  }}>
                  <Text style={[styles.small, {color: colors.white}]}>
                    GET DIRECTIONS
                  </Text>
                </Pressable>
              </View>
            </>
          )}
          {transportMode !== '' && transportMode !== 'started' && (
            <View style={{flex: 1}}>
              <Text style={styles.semiBold}>
                {secondsToHrsMins(directionRoute?.duration)}{' '}
                <Text style={[styles.regular, {color: colors.black}]}>
                  ({convertMetres(directionRoute?.distance)})
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Pressable
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.orange,
                    borderRadius: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    flex: 1,
                    marginRight: 20,
                  }}
                  onPress={() => {
                    setTransportMode('started');
                  }}>
                  <Text style={[styles.small, {color: colors.white}]}>
                    START
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    borderWidth: 2,
                    borderColor: colors.orange,
                    borderRadius: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    flex: 1,
                  }}
                  onPress={() => {
                    openDirectionsInstructionsModal();
                  }}>
                  <Text style={[styles.small, {color: colors.orange}]}>
                    STEP
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          {transportMode === 'started' && (
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.semiBold}>
                  {secondsToHrsMins(directionRoute?.duration)}{' '}
                  <Text style={[styles.regular, {color: colors.black}]}>
                    ({convertMetres(directionRoute?.distance)})
                  </Text>
                </Text>
                <View style={{justifyContent: 'flex-start'}}>
                  <Pressable
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.red,
                      borderRadius: 10,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                    }}
                    onPress={() => {
                      setTransportMode('');
                    }}>
                    <Text style={[styles.small, {color: colors.white}]}>
                      CLOSE
                    </Text>
                  </Pressable>
                </View>
              </View>
              <Text style={styles.regular}>
                {secondsToFutureTime(directionRoute.duration)} to arrive
              </Text>
            </View>
          )}
        </View>
      </BottomSheetModal>
      <MapSearch
        ref={sourceMapSearchRef}
        onPress={(value: IMarker) => {
          if (value.title === 'Your Location') {
            setSource(userLocation);
            animateToRegion(userLocation.latlng);
            setTransportMode('');
          } else {
            setSource(value);
            animateToRegion(value.latlng);
            setTransportMode('');
          }
          sourceMapSearchRef.current?.closeModal();
          if (value.title === destination.title) setDestination(defaultMarker);
        }}
      />
      <MapSearch
        ref={destinationMapSearchRef}
        onPress={(value: IMarker) => {
          if (value.title === 'Your Location') {
            setDestination(userLocation);
            animateToRegion(userLocation.latlng);
          } else {
            setDestination(value);
            animateToRegion(value.latlng);
          }
          destinationMapSearchRef.current?.closeModal();
          if (value.title === source.title) setSource(defaultMarker);
        }}
      />
      <View
        style={[
          localStyles.container,
          {width, height: height - height * 0.05},
        ]}>
        {userLocation.title && userLocation.description && (
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={localStyles.map}
            region={{
              latitude: userLocation.latlng.latitude,
              longitude: userLocation.latlng.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            {userLocation.title !== '' &&
              userLocation.description !== '' &&
              userLocation.title !== source.title && (
                <Marker
                  coordinate={userLocation.latlng}
                  title={userLocation.title}
                  description={userLocation.description}
                  tracksViewChanges={false}>
                  <UserLocationMarker />
                </Marker>
              )}
            {source.title !== '' && source.description !== '' && (
              <Marker
                coordinate={source.latlng}
                title={source.title}
                description={source.description}
                tracksViewChanges={false}>
                <MapPin2 />
              </Marker>
            )}
            {destination.title !== '' && destination.description !== '' && (
              <Marker
                coordinate={destination.latlng}
                title={destination.title}
                description={destination.description}
                tracksViewChanges={false}>
                <MapPin />
              </Marker>
            )}
            {directionRoute && (
              <Polyline
                coordinates={directionRoute.polylineCoordinates}
                strokeWidth={2}
                strokeColor={colors.orange}
              />
            )}
          </MapView>
        )}
        <Pressable
          style={{
            position: 'absolute',
            bottom: 100,
            right: 15,
            width: 50,
            height: 50,
            backgroundColor: colors.orange,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => animateToRegion(userLocation.latlng)}>
          <MapLocate />
        </Pressable>
        {transportMode === 'started' && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              flexDirection: 'row',
              backgroundColor: colors.orange,
            }}>
            <View
              style={{
                position: 'relative',
                flexDirection: 'row',
                flex: 1,
                paddingTop: 40,
                paddingBottom: 20,
                paddingLeft: 20,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <Pressable
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.white,
                    borderRadius: 50,
                  }}
                  onPress={() => openDirectionsInstructionsModal()}>
                  {getDirectionIcon(
                    directionRoute?.directionInstructions[1]?.maneuver?.type,
                    directionRoute?.directionInstructions[1]?.maneuver
                      ?.modifier,
                  )}
                </Pressable>
                <Text
                  style={[
                    styles.regular,
                    {color: colors.white, paddingTop: 5},
                  ]}>
                  {convertMetres(
                    directionRoute?.directionInstructions[1]?.distance,
                  )}
                </Text>
              </View>
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: colors.white,
                  marginLeft: 20,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  padding: 10,
                }}
                onPress={() => openDirectionsInstructionsModal()}>
                <Text style={[styles.semiBold, {color: colors.darkGrey}]}>
                  {
                    directionRoute?.directionInstructions[1]?.maneuver
                      ?.instruction
                  }
                </Text>
              </Pressable>
              <Pressable
                style={{
                  position: 'absolute',
                  bottom: -60,
                  right: 20,
                  backgroundColor: colors.orange,
                  padding: 10,
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate('ARView')}>
                <Text style={[styles.small, {color: colors.white}]}>
                  VIEW WITH AR
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        {transportMode !== 'started' && (
          <View
            style={{
              position: 'absolute',
              top: 40,
              left: 0,
              width: '100%',
            }}>
            <View style={localStyles.topContainer}>
              <View style={{flex: 1}}>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 30,
                  }}
                  onPress={() => sourceMapSearchRef.current?.openModal()}>
                  <DirectionArrow />
                  <Text
                    style={[
                      styles.regular,
                      {
                        color: source.title ? colors.orange : colors.grey,
                        marginLeft: 10,
                      },
                    ]}>
                    {source.title || 'Enter source...'}
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={() => destinationMapSearchRef.current?.openModal()}>
                  <MapPin1 />
                  <Text
                    style={[
                      styles.regular,
                      {
                        color: destination.title ? colors.orange : colors.grey,
                        marginLeft: 10,
                      },
                    ]}>
                    {destination.title || 'Enter Destination...'}
                  </Text>
                </Pressable>
              </View>
              <Pressable
                style={{
                  backgroundColor: '#f68807',
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  const temp = source;
                  setSource(destination);
                  setDestination(temp);
                }}>
                <MapSwitch />
              </Pressable>
              {transportMode !== '' && (
                <View
                  style={{
                    flexDirection: 'column',
                    position: 'absolute',
                    right: 0,
                    bottom: -200,
                  }}>
                  <Pressable
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 15,
                      backgroundColor: colors.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}
                    onPress={() => {
                      setTransportMode('driving');
                      setDirectionRoute(directionsInformation.driving);
                    }}>
                    <FontAwesome5 name="car" size={24} color={colors.orange} />
                  </Pressable>
                  <Pressable
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 15,
                      backgroundColor: colors.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 10,
                    }}
                    onPress={() => {
                      setTransportMode('walking');
                      setDirectionRoute(directionsInformation.walking);
                    }}>
                    <MaterialIcons
                      name="directions-walk"
                      size={24}
                      color={colors.orange}
                    />
                  </Pressable>
                  <Pressable
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 15,
                      backgroundColor: colors.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      setTransportMode('cycling');
                      setDirectionRoute(directionsInformation.cycling);
                    }}>
                    <MaterialIcons
                      name="directions-bike"
                      size={24}
                      color={colors.orange}
                    />
                  </Pressable>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    </BottomSheetModalProvider>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 740,
    // width: 410,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topContainer: {
    backgroundColor: colors.white,
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    // zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
});
