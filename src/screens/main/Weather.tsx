import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';

import {ILatLng, IMarker, IReview} from '../../utils';
import {colors} from '../../styles/colors';
import {fonts} from '../../styles/fonts';
import {styles} from '../../styles/styles';

import DizzeeWorld from '../../assets/amusement-parks/dizzee-world.jpg';
import MapPin from '../../assets/weather-icons/map-pin.svg';
import ScatterdShowers from '../../assets/weather-icons/scattered-showers.png';
import RainHail from '../../assets/weather-icons/rain-hail.svg';
import Wind from '../../assets/weather-icons/wind.svg';
import Drops from '../../assets/weather-icons/drops.svg';

import Fog from '../../assets/weather-icons/fog.svg';
import PartlyCloudy from '../../assets/weather-icons/partly-cloudy.svg';
import Rain from '../../assets/weather-icons/rain.svg';
import RainyLightning from '../../assets/weather-icons/rainy-lightning.svg';
import {weatherData as initialWeatherData} from '../../data/data';
import {getWeatherDetails} from '../../api/weather';

export default function Weather(props: any) {
  const {width} = useWindowDimensions();

  const [weatherData, setWeatherData] = useState(initialWeatherData);
  const [activeWeather, setActiveWeather] = useState(initialWeatherData[0]);

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

  useEffect(() => {
    const getWeather = async () => {
      getWeatherDetails(12.8202, 80.2492, new Date()).then((response: any) => {
        setWeatherData(response);
        setActiveWeather(response[0]);
        console.log(response);
      });
    };

    getWeather();
  }, []);

  return (
    <View style={localStyles.weatherContainer}>
      <View style={{position: 'relative'}}>
        <LinearGradient
          colors={[
            '#ffffff00',
            '#ffffff80',
            '#ffffff80',
            '#ffffff80',
            '#ffffff80',
            '#ffffffff',
            '#ffffffff',
          ]}
          style={localStyles.linearGradient}
        />
        <Image source={DizzeeWorld} style={localStyles.backgroundImage} />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            padding: 20,
            paddingTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '78%',
          }}>
          <Pressable
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Fontisto name="map-marker-alt" size={16} color={colors.white} />
            <Text
              style={[styles.regular, {color: colors.white, paddingLeft: 5}]}>
              MGM, Chennai
            </Text>
          </View>
        </View>
        <View style={{position: 'absolute', bottom: 100, left: 0, zIndex: 3}}>
          <View style={{position: 'relative'}}>
            <MapPin />
            <View
              style={{
                position: 'absolute',
                // backgroundColor: colors.red,
                width: '100%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {activeWeather.weatherCondition === 'PartlyCloudy' && (
                <PartlyCloudy width={50} height={50} />
              )}
              {activeWeather.weatherCondition === 'Fog' && (
                <Fog width={50} height={50} />
              )}
              {activeWeather.weatherCondition === 'Rain' && (
                <Rain width={50} height={50} />
              )}
              {activeWeather.weatherCondition === 'RainyLightning' && (
                <RainyLightning width={50} height={50} />
              )}
            </View>
            <Text
              style={[
                styles.bold,
                {
                  color: colors.white,
                  position: 'absolute',
                  bottom: 55,
                  right: 60,
                  fontSize: 20,
                },
              ]}>
              {activeWeather.maxTemperature}ºC
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 100,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 3,
          }}>
          <View
            style={{
              padding: 5,
              backgroundColor: colors.orange,
              borderRadius: 5,
            }}>
            <Text style={[styles.small, {color: colors.white}]}>
              {activeWeather.date}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 50,
            left: 0,
            zIndex: 3,
            width: '100%',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 30,
            }}>
            <RainHail />
            <Text
              style={[styles.regular, {color: colors.orange, paddingLeft: 5}]}>
              {activeWeather.precipitation} %
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 30,
            }}>
            <Wind />
            <Text
              style={[styles.regular, {color: colors.orange, paddingLeft: 5}]}>
              {activeWeather.windSpeed} km/h
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Drops />
            <Text
              style={[styles.regular, {color: colors.orange, paddingLeft: 5}]}>
              {activeWeather.precipitaionProbability} %
            </Text>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: 1,
            width: '90%',
            marginBottom: 10,
            backgroundColor: colors.lightGrey,
          }}
        />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingLeft: 20,
          paddingBottom: 20,
        }}>
        {weatherData.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setActiveWeather(item);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 15,
              paddingHorizontal: 5,
              borderRadius: 15,
              backgroundColor: colors.white,
              elevation: item.day === activeWeather.day ? 5 : 0.01,
            }}>
            <Text
              style={[
                styles.regular,
                {
                  color:
                    item.date === activeWeather.date ? '#ff647c' : colors.grey,
                },
              ]}>
              {item.day}
            </Text>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: colors.orange,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              {item.weatherCondition === 'PartlyCloudy' && <PartlyCloudy />}
              {item.weatherCondition === 'Fog' && <Fog />}
              {item.weatherCondition === 'Rain' && <Rain />}
              {item.weatherCondition === 'RainyLightning' && <RainyLightning />}
            </View>
            <Text style={[styles.regular, {color: '#ff647c'}]}>
              {item.maxTemperature}º
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const localStyles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
    backgroundColor: colors.red,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    width: '100%',
    height: '100%',
  },
});
