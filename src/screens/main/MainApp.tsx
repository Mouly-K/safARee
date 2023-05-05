import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Navigation Icon Imports
import ExploreIcon from '../../assets/nav-icons/explore.svg';
import MapIcon from '../../assets/nav-icons/map.svg';
import NotificationsIcon from '../../assets/nav-icons/notifications.svg';
import ProfileIcon from '../../assets/nav-icons/profile.svg';

//Screen Imports
import Explore from './Explore';
import Maps from './Maps';
import Notifications from './Notifications';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={({route}) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Explore') {
            return <ExploreIcon />;
          } else if (route.name === 'Maps') {
            return <MapIcon />;
          } else if (route.name === 'Notifications') {
            return <NotificationsIcon />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
