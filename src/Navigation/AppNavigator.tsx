import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import ScreenLogin from '../Screens/ScreenLogin/ScreenLogin';
import ScreenRegister from '../Screens/ScreenSignup/ScreenSignup';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import { RootState } from '../utils/redux/rootReducer';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Login" component={ScreenLogin} />
          <Stack.Screen name="Register" component={ScreenRegister} />
        </>
      ) : (
        <Stack.Screen name="Home" component={ScreenHome} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
