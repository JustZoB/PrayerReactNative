import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from '../utils/colors'

export const CircleNumber: React.FC = () => {
  return (
    <View style={styles.cirlce}>
      <Text style={styles.text}>3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cirlce: {
    borderRadius: 100,
    backgroundColor: colors.darkRed,
  },
  text: {
    fontSize: 9,
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
  }
})
