import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from '../utils/colors'

interface ButtonProps {
  title: string;
  onPress: Function;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      disabled={disabled}
      onPress={() => onPress()}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.beige,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})