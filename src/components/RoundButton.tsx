import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from '../utils/colors'

interface ButtonProps {
  title: string;
  onPress: Function;
}

export const RoundButton: React.FC<ButtonProps> = ({ title, onPress }) => {
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
    paddingVertical: 7,
    borderRadius: 15,
    backgroundColor: colors.beige,
    alignSelf: 'center',
    width: 210,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})
