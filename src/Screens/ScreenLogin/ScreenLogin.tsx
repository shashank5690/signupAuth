import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { mmkv } from '../../utils/Storage/mmkv';
import styles from './styleLogin';
import { FormValues, LoginScreenNavigationProp } from './utils/types/interfaces';
import { schema } from './utils/schema/validation';

type ScreenLoginProps = {
  navigation: LoginScreenNavigationProp;
};

const ScreenLogin: React.FC<ScreenLoginProps> = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const storedUsername = mmkv.getString('username');
    const storedPassword = mmkv.getString('userpassword');
    const hashedPassword = btoa(data.password);

    if (data.username !== storedUsername || hashedPassword !== storedPassword) {
      Alert.alert('Login Error', 'Invalid username or password');
      return;
    }

    Alert.alert('Login Successful', 'Welcome back!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../ScreenLogin/utils/Assets/star.png')} style={styles.headerImage} />
      <Text style={styles.title}>
        Hi,Welcome back 👋
       </Text>
      <Text style={styles.label}>Username</Text>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.socialMediaIcons}>
        <Image source={require('../ScreenLogin/utils/Assets/google.png')} style={styles.socialIcon} />
        <Image source={require('../ScreenLogin/utils/Assets/fb.png')} style={styles.socialIcon} />
        <Image source={require('../ScreenLogin/utils/Assets/apple.png')} style={styles.socialIcon} />
      </View>
      <Text style={styles.registerPrompt}>
        Not a member?{' '}
        <Text style={styles.loginText} onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default ScreenLogin;
