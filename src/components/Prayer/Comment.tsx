import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from '../../utils/colors'

interface CommentsProps {
  key: number,
  id: number,
}

export const Comment: React.FC<CommentsProps> = ({ id }) => {
  return (
    <View>
      <Text style={styles.title}>Comment {id}</Text>
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
