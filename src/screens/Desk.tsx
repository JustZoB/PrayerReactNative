import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export const Desk: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Desk
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});
