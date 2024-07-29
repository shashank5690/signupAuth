import React from 'react';
import { TextInput, Text, View, StyleSheet, TextInputProps } from 'react-native';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';
import styles from './ComponentFormInput';

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
  style?: TextInputProps['style'];
}

function FormInput<T extends FieldValues>({
  control,
  name,
  placeholder,
  secureTextEntry = false,
  error,
  style,
}: FormInputProps<T>) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

export default FormInput;
