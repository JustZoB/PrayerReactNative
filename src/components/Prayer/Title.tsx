import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { getPrayerTitle } from "../../store/prayers/selectors";
import { RootState } from "../../store/store";
import colors from '../../utils/colors'

interface TitleProps {
  id: number;
}

export const Title: React.FC<TitleProps> = ({ id }) => {
  const title = useSelector((state: RootState) => getPrayerTitle(state.prayersSlice, id));
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitleContainer: {
    paddingHorizontal: 15,
    paddingTop: 0,
    paddingBottom: 23,
    backgroundColor: colors.beige,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 27,
    color: colors.white,
  },
})