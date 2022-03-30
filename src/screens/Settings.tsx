import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { logOut } from '../store/userLogin/reducers';

export const Settings: React.FC = () => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    AsyncStorage.removeItem('userToken')
    AsyncStorage.removeItem('userName')
    AsyncStorage.removeItem('userEmail')
    dispatch(logOut())
  }

  return (
    <ScrollView style={styles.container}>
      <Button
        title='Logout'
        onPress={onLogOut}
      />
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
