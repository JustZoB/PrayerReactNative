import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';

export const SubscribedPrayers: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>SubscribedPrayers</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
});
