import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Navigation Icon Imports
import ExploreIcon from '../../assets/nav-icons/explore.svg';
import ExploreIconGrey from '../../assets/nav-icons/explore-grey.svg';
import MapIcon from '../../assets/nav-icons/map.svg';
import MapIconGrey from '../../assets/nav-icons/map-grey.svg';
import NotificationsIcon from '../../assets/nav-icons/notifications.svg';
import NotificationsIconGrey from '../../assets/nav-icons/notifications-grey.svg';
import ProfileIcon from '../../assets/nav-icons/profile.svg';
import ProfileIconGrey from '../../assets/nav-icons/profile-grey.svg';
import ARIcon from '../../assets/nav-icons/ar.svg';

//Screen Imports
import Explore from './Explore';
import Maps from './Maps';
import Notifications from './Notifications';
import Profile from './Profile';
import ARMain from './ar/ARMain';
import Search from './Search';

import {colors} from '../../styles/colors';
import {generateBoxShadowStyle} from '../../utils';

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
        tabBarShowLabel: false,
        tabBarStyle: {
          ...generateBoxShadowStyle(0, 8, 24, 1, colors.grey, 16),
          height: '8%',
        },
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Explore') {
            return focused ? <ExploreIcon /> : <ExploreIconGrey />;
          } else if (route.name === 'Maps') {
            return focused ? <MapIcon /> : <MapIconGrey />;
          } else if (route.name === 'ARMain') {
            return (
              <LinearGradient
                colors={['#f57a20', '#ee9e66']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  width: 65,
                  height: 65,
                  position: 'absolute',
                  top: -20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <ARIcon />
              </LinearGradient>
            );
          } else if (route.name === 'Notifications') {
            return focused ? <NotificationsIcon /> : <NotificationsIconGrey />;
          } else if (route.name === 'Profile') {
            return focused ? <ProfileIcon /> : <ProfileIconGrey />;
          }
        },
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.grey,
      })}>
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Maps" component={Maps} />
      <Tab.Screen name="ARMain" component={ARMain} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarButton: () => null,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
}
