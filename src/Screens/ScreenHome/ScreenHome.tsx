import React, { useEffect } from 'react';
import { View, Text, Button, BackHandler, Platform, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Props } from './utils/type/interfaces';
import styles from './styleHome';
import { logout } from '../ScreenLogin/redux/authSlice';

const ScreenHome: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const handleBackPress = () => {
    if (Platform.OS === 'android') {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => null, // Do nothing if user cancels
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(), // Exit the app if user confirms
          },
        ],
        { cancelable: false }
      );
      return true; // Prevent default behavior
    }
    return false; 
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

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
