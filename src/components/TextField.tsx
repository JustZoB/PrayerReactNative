import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';

interface TextFieldProps {
  placeholder: string;
  isSecure?: boolean;
  onTextChange: Function;
}

export const TextField: React.FC<TextFieldProps> = ({ placeholder, isSecure = false, onTextChange }) => {
  const [isPassword, setIsPassword] = useState<boolean>(false)

  useEffect(() => {
    setIsPassword(isSecure)
  }, [])

  return (
    <>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={(text) => onTextChange(text)}
        style={styles.textField}
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
  textField: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
  },
  showPasswordBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  checkbox: {
    alignSelf: 'center',
  },
})