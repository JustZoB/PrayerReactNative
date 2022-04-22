import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from '../utils/colors'

interface Props {
  text: string;
}

export const TextFieldError: React.FC<Props> = ({ text }) => {
  return (
    <Text style={styles.text}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: 13,
    right: 10,
    fontSize: 16,
    color: colors.red,
  },
})
