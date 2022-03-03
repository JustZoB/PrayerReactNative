import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: Function
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
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
    backgroundColor: '#BFB393',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})