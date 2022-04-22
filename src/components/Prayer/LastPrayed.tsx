import React from "react";
import { Text, StyleSheet, View } from "react-native";

import colors from '../../utils/colors'

export const LastPrayed: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stick} />
      <Text style={styles.text}>Last prayed 8 min ago</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  stick: {
    width: 3,
    backgroundColor: colors.darkRed,
    height: 22,
    borderRadius: 5,
    marginRight: 10,
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
    color: colors.black,
  },
})
