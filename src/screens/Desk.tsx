import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Desk: React.FC = () => {
  const auth = useSelector((state: RootState) => state.userLoginSlice);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Desk {auth.user.name}
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
