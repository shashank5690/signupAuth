import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenSignup/ScreenSignup';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={ScreenLogin} />
        <Stack.Screen name="Register" component={ScreenRegister} />
        <Stack.Screen name="Home" component={ScreenHome} />
      </Stack.Navigator>

  );
};

export default AppNavigator;
