import axios from 'axios';

function formatDate(date: Date) {
  let year: any = date.getFullYear();
  let month: any = date.getMonth() + 1;
  let day: any = date.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  return year + '-' + month + '-' + day;
}

function getFormattedDateString(dateString: string) {
  let date = new Date(dateString);

  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();

  let monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  let monthName = monthNames[month];

  let today = new Date();

  let currentMonth = today.getMonth();
  let currentDay = today.getDate();
  let currentYear = today.getFullYear();

  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let tomorrowMonth = tomorrow.getMonth();
  let tomorrowDay = tomorrow.getDate();
  let tomorrowYear = tomorrow.getFullYear();

  let prefix = '';
  if (month === currentMonth && day === currentDay && year === currentYear) {
    prefix = 'TODAY, ';
  } else if (
    month === tomorrowMonth &&
    day === tomorrowDay &&
    year === tomorrowYear
  ) {
    prefix = 'TOMORROW, ';
  }
  return prefix + monthName + ' ' + day;
}

function getDay(dateString: string) {
  let date = new Date(dateString);
  let day = date.getDay();
  let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let dayName = dayNames[day];
  return dayName;
}

function getWeatherFromWeatherCode(number: number) {
  let weatherMap: any = {
    '11-18': 'Fog',
    '40-49': 'Fog',
    '28': 'Fog',
    '0-10': 'PartlyCloudy',
    '19': 'PartlyCloudy',
    '20-27': 'Rain',
    '60-69': 'Rain',
    '80-94': 'Rain',
    '17': 'RainyLightning',
    '29': 'RainyLightning',
    '95-99': 'RainyLightning',
  };
  let weather = '';
  for (let key in weatherMap) {
    if (key.includes('-')) {
      let [lower, upper] = key.split('-').map(Number);
      if (number >= lower && number <= upper) {
        weather = weatherMap[key];
        break;
      }
    } else {
      if (number === Number(key)) {
        weather = weatherMap[key];
        break;
      }
    }
  }
  if (weather === '') {
    weather = 'PartlyCloudy';
  }
  return weather;
}

export const getWeatherDetails: any = async (
  latitude: number,
  longitude: number,
  date: Date,
) => {
  const fromDate = formatDate(date);
  const toDate = formatDate(new Date(date.setDate(date.getDate() + 6)));

  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=' +
    latitude +
    '&longitude=' +
    longitude +
    '&daily=temperature_2m_max,temperature_2m_min,weathercode,showers_sum,precipitation_probability_max,windspeed_10m_max&timezone=auto&start_date=' +
    fromDate +
    '&end_date=' +
    toDate;
  let weatherData: any = [];
  await axios
    .get(url)
    .then(response => {
      const tmp = new Date();
      weatherData = response.data.daily.time.map(
        (item: any, index: number) => ({
          date: getFormattedDateString(item),
          day: getDay(item),
          weatherCondition: getWeatherFromWeatherCode(
            response.data.daily.weathercode[index],
          ),
          maxTemperature: Math.trunc(
            response.data.daily.temperature_2m_max[index],
          ),
          minTemperature: Math.trunc(
            response.data.daily.temperature_2m_min[index],
          ),
          precipitaionProbability: Math.trunc(
            response.data.daily.precipitation_probability_max[index],
          ),
          precipitation: Math.trunc(
            response.data.daily.showers_sum[index] * 100,
          ),
          windSpeed: response.data.daily.windspeed_10m_max[index],
        }),
      );
    })
    .catch(err => {
      console.log('ERROR: ', err);
    });
  return weatherData;
};
