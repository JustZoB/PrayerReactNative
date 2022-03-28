import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from '../../utils/colors'

export const CountBlocks: React.FC = () => {
  return (
    <View style={styles.blocksContainer}>
      <View style={styles.block}>
        <Text style={styles.bigNumber_small}>July 25 2017</Text>
        <Text style={styles.text}>Date Added</Text>
        <Text style={styles.blueText}>Opened for 4 days</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.bigNumber}>123</Text>
        <Text style={styles.text}>Times Prayed Total</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.bigNumber}>63</Text>
        <Text style={styles.text}>Times Prayed by Me</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.bigNumber}>60</Text>
        <Text style={styles.text}>Times Prayed by Others</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  blocksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  block: {
    padding: 15,
    justifyContent: 'center',
    width: '50%',
    height: 108,
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  bigNumber: {
    fontSize: 32,
    lineHeight: 37,
    color: colors.beige,
  },
  bigNumber_small: {
    fontSize: 22,
    lineHeight: 26,
    color: colors.beige,
  },
  blueText: {
    fontSize: 13,
    lineHeight: 15,
    color: colors.lightBlue,
  },
  text: {
    fontSize: 13,
    lineHeight: 15,
    color: colors.black,
  },
})
