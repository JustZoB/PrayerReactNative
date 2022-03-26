import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export const SubscribedPrayers: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>SubscribedPrayers</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
});
