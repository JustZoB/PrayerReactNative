import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

import colors from '../utils/colors'

export const AppLoader: React.FC = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView source={require('../assets/loading.json')} autoPlay loop />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundOpacity,
    zIndex: 1,
  },
})
