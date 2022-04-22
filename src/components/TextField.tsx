import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';

import colors from '../utils/colors'

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  value?: string;
  stylesProps?: Object;
  onTextChange: Function;
}

export const TextField: React.FC<TextFieldProps> = ({ placeholder, isSecure = false, onTextChange, value, stylesProps }) => {
  const [isPassword, setIsPassword] = useState<boolean>(false)

  useEffect(() => {
    setIsPassword(isSecure)
  }, [])


  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={isPassword}
        onChangeText={(text) => onTextChange(text)}
        style={[styles.textField, stylesProps]}
        maxLength={256}
      />
      {isSecure &&
        <View style={styles.showPasswordBlock}>
          <CheckBox
            value={!isPassword}
            onValueChange={() => setIsPassword(!isPassword)}
            style={styles.checkbox}
          />
          <Text>Show Password</Text>
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  showPasswordBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  textField: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
  }
})
