import {useState, useEffect, useCallback} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

//Screen Imports
import AccountVerified from './src/screens/onboarding/AccountVerified';
import ForgotPassword from './src/screens/onboarding/ForgotPassword';
import Landing from './src/screens/onboarding/Landing';
import Login from './src/screens/onboarding/Login';
import NewPassword from './src/screens/onboarding/NewPassword';
import Onboarding from './src/screens/onboarding/Onboarding';
import Registration from './src/screens/onboarding/Registration';
import VerifyOTP from './src/screens/onboarding/VerifyOTP';
import RegistrationVerified from './src/screens/onboarding/RegistrationVerified';
import MainApp from './src/screens/main/MainApp';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="AccountVerified" component={AccountVerified} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          <Stack.Screen
            name="RegistrationVerified"
            component={RegistrationVerified}
          />
          <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
