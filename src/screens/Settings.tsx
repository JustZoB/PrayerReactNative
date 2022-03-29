import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../components/Button';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { logOut } from '../store/userLogin/reducers';

export const Settings: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
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
