import {View, Text, Modal, Pressable, StatusBar} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
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
import ARTutorialIcon from '../../assets/ar-tutorial.svg';

//Screen Imports
import Explore from './Explore';
import Maps from './Maps';
import Notifications from './Notifications';
import Profile from './Profile';
import ARMain from './ar/ARMain';
import Search from './Search';
import Details from './Details';
import Checkout from './Checkout';
import Weather from './Weather';
import ARView from './ar/ARView';
import NewComer from './NewComer';
import EditProfile from './EditProfile';
import EditProfileVerification from './EditProfileVerification';
import ProfileVerifyOTP from './ProfileVerifyOTP';

import {colors} from '../../styles/colors';
import {generateBoxShadowStyle} from '../../utils';
import {styles} from '../../styles/styles';
import StyledButton from '../../components/General/StyledButton';

const Tab = createBottomTabNavigator();

export default function MainApp() {
  const navigation = useNavigation();
  const [arTutorialModalVisible, setArTutorialModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={arTutorialModalVisible}
        onRequestClose={() => {
          setArTutorialModalVisible(!arTutorialModalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 5,
            }}>
            <ARTutorialIcon />
            <Text style={[styles.bold, {textAlign: 'center', marginTop: 20}]}>
              Tutorials for AR
            </Text>
            <Text
              style={[styles.regular, {textAlign: 'center', marginTop: 10}]}>
              Is this the first time you have experience with AR Camera? Let us
              help you to understand it easier.
            </Text>
            <StyledButton
              title="START TOUR"
              style={{
                backgroundColor: colors.orange,
                marginHorizontal: 0,
                height: 50,
                marginTop: 20,
                marginBottom: 30,
                width: 300,
              }}
              onPress={() => {
                StatusBar.setBackgroundColor(colors.white);
                navigation.navigate('ARMain');
                setArTutorialModalVisible(false);
              }}
            />
            <Pressable
              onPress={() => {
                StatusBar.setBackgroundColor(colors.white);
                setArTutorialModalVisible(false);
              }}>
              <Text style={[styles.regular, {color: colors.orange}]}>
                NO THANKS
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
                <Pressable
                  style={{position: 'absolute', top: -20}}
                  onPress={() => {
                    StatusBar.setBackgroundColor('rgba(0,0,0,0.5)');
                    setArTutorialModalVisible(true);
                  }}>
                  <LinearGradient
                    colors={['#f57a20', '#ee9e66']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 65,
                      height: 65,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 50,
                    }}>
                    <ARIcon />
                  </LinearGradient>
                </Pressable>
              );
            } else if (route.name === 'Notifications') {
              return focused ? (
                <NotificationsIcon />
              ) : (
                <NotificationsIconGrey />
              );
            } else if (route.name === 'Profile') {
              return focused ? <ProfileIcon /> : <ProfileIconGrey />;
            }
          },
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: colors.grey,
        })}>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen
          name="ARMain"
          component={ARMain}
          options={{tabBarStyle: {display: 'none'}}}
        />
        <Tab.Screen
          name="ARView"
          component={ARView}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
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
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="Checkout"
          component={Checkout}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="Weather"
          component={Weather}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="NewComer"
          component={NewComer}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="EditProfileVerification"
          component={EditProfileVerification}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tab.Screen
          name="ProfileVerifyOTP"
          component={ProfileVerifyOTP}
          options={{
            tabBarButton: () => null,
            tabBarHideOnKeyboard: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
