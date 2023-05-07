import {Platform} from 'react-native';
import {LatLng} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

export interface ILatLng {
  latitude: number;
  longitude: number;
}
export interface IMarker {
  title: string;
  description: string;
  value: string;
  latlng: ILatLng;
}

export const defaultMarker: IMarker = {
  title: '',
  description: '',
  value: '0',
  latlng: {latitude: 0, longitude: 0},
};

export function generatePointsOnCurvedBezier(
  startPoint: LatLng,
  endPoint: LatLng,
  numberOfPoints: number,
) {
  var curvature = 0.3;
  var controlPoint1 = {
    latitude: startPoint.latitude,
    longitude:
      startPoint.longitude +
      (endPoint.longitude - startPoint.longitude) * curvature,
  };
  var controlPoint2 = {
    latitude: endPoint.latitude,
    longitude:
      endPoint.longitude -
      (endPoint.longitude - startPoint.longitude) * curvature,
  };

  var points = [];
  for (var i = 0; i < numberOfPoints; i++) {
    var t = i / (numberOfPoints - 1);
    var x =
      (1 - t) * (1 - t) * (1 - t) * startPoint.latitude +
      3 * (1 - t) * (1 - t) * t * controlPoint1.latitude +
      3 * (1 - t) * t * t * controlPoint2.latitude +
      t * t * t * endPoint.latitude;
    var y =
      (1 - t) * (1 - t) * (1 - t) * startPoint.longitude +
      3 * (1 - t) * (1 - t) * t * controlPoint1.longitude +
      3 * (1 - t) * t * t * controlPoint2.longitude +
      t * t * t * endPoint.longitude;
    points.push({latitude: x, longitude: y});
  }
  return points;
}

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const validatePassword = (password: string) => {
  return String(password)
    .toLowerCase()
    .match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,16}$/);
};

export const validateAlphabet = (value: string) => {
  return String(value)
    .toLowerCase()
    .match(/^[a-zA-Z][a-zA-Z ]+/);
};

export const validatePhoneNumber = (phoneNumber: string) => {
  return String(phoneNumber)
    .toLowerCase()
    .match(/^[0-9]{10}$/);
};

export const getCurrentDate = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
};

export const equalsIgnoreCase = (str1: string, str2: string) => {
  return str1.toString().toUpperCase() === str2.toString().toUpperCase();
};

export function isObject(objValue: any) {
  return (
    objValue && typeof objValue === 'object' && objValue.constructor === Object
  );
}

export function toUpper(str: string) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

export const getDateTimeObject = (dateTime: any) => {
  //    07/12/22 21:08:37
  dateTime = dateTime.split(' ');
  let date = dateTime[0].split('/');
  let time = dateTime[1].split(':');
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return {
    date: Number(date[0]),
    month: months[date[1] - 1],
    year: Number(date[2]),
    hours: time[0] % 12 || 12,
    minutes: Number(time[1]),
    seconds: Number(time[2]),
    meridiem: time[0] > 12 ? 'PM' : 'AM',
  };
};

export const getDateString = (dateTime: any) => {
  dateTime = getDateTimeObject(dateTime);

  dateTime.year === getDateString.presentYear ? (dateTime.year = '') : null;
  return (
    dateTime.month +
    ' ' +
    dateTime.date +
    ' ' +
    dateTime.year +
    ' · ' +
    dateTime.hours +
    ' ' +
    dateTime.meridiem
  );
};

getDateString.presentYear = new Date().getFullYear() % 100;

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function isNumber(n: any) {
  if (n === ' ') return false;
  if (n.trim().length === 0) return false;
  return !isNaN(n);
}

export const generateBoxShadowStyle = (
  xOffset: number,
  yOffset: number,
  shadowRadius: number,
  shadowOpacity: number,
  shadowColor: string,
  elevation: number,
) => {
  if (Platform.OS === 'ios') {
    return {
      shadowColor: shadowColor,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    return {
      elevation,
      shadowColor: shadowColor,
    };
  }
};

export const requestLocation = async () => {
  let location;
  Geolocation.getCurrentPosition(
    position => {
      // location = position.coords;
      return position.coords;
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
  return location;
};