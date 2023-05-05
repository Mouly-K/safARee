import {Platform} from 'react-native';

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
