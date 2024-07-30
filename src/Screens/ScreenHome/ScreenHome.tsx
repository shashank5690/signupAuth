import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, BackHandler, Platform, Alert, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { logout } from '../ScreenLogin/redux/authSlice';
import { fetchImagesRequest } from '../ScreenHome/redux/imageSlice'; // Import the action
import { RootState } from '../../utils/redux/rootReducer';
import Card from './components/Card'; // Adjust the path according to your project structure

const ScreenHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state: RootState) => state.image);

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
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        { cancelable: false }
      );
      return true;
    }
    return false;
  };

  useEffect(() => {
    dispatch(fetchImagesRequest());

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Card
      imageUrl={item.webformatURL}
      title={item.title}
      likes={item.likes}
      downloads={item.downloads}
      views={item.views}
      tags={item.tags}
      onPress={() => { /* Handle card press */ }}
    />
  );

  if (loading) return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's browse</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ScreenHome;
