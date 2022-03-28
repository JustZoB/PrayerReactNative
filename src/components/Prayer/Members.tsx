import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from '../../utils/colors'

export const Members: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Members</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 15,
    fontSize: 13,
    lineHeight: 16,
    textTransform: 'uppercase',
    color: colors.lightBlue,
  }
})
