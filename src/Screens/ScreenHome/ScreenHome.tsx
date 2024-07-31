import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button, BackHandler, Platform, Alert, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { logout } from '../ScreenLogin/redux/authSlice';
import { fetchImagesRequest } from '../ScreenHome/redux/imageSlice'; 
import { RootState } from '../../utils/redux/rootReducer';
import Card from './components/Card'; 
import { ImageHits } from './utils/type/ImageState';
import { ListRenderItemInfo } from 'react-native';
import styles from './styleHome';

const ScreenHome: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  //object destructed the images, errors, loading state from the store
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

    const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      backHandlerListener.remove();
    };
  }, [dispatch]);
  

  //ListRenderItemInfo used here for better typesafety and correct data type
  const renderItem = ({ item }: ListRenderItemInfo<ImageHits>) => (
    <Card
      imageUrl={item.webformatURL}
      likes={item.likes}
      downloads={item.downloads}
      views={item.views}
      tags={item.tags}
      onPress={() => { } } title={''}    />
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


export default ScreenHome;
