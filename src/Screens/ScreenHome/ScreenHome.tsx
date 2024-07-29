import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import {  Props } from './utils/type/interfaces';
import styles from './styleHome';
import { logout } from '../ScreenLogin/redux/authSlice';



const ScreenHome: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>🎉 Congratulations!</Text>
    <Text style={styles.subtitle}>You've unlocked the treasure! 🗝️</Text>
    <Text style={styles.description}>
      You’ve achieved something amazing. We hope you’re enjoying the rewards. 
      Feel free to explore more features or log out if you’re done for today.
    </Text>
    <Button title="Logout" onPress={handleLogout} color="#FF6347" />
  </View>
  );
};

export default ScreenHome;
