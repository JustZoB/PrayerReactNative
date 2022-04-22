import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from '../utils/colors'

interface Props {
  text: string;
}

export const ErrorMessage: React.FC<Props> = ({ text }) => {
  return (
    <Text style={styles.text}>Server error: {text}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.red,
    marginTop: 10,
  },
})
