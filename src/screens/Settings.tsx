import React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { userToken } from '../utils/constants';
import AppRoutes from '../utils/routes';
import { Button } from '../components/Button';
import { logOut } from '../store/userLogin/reducers';
import { removeItem } from '../services/asyncStorage';

type SettingsNavigationProps = {
  navigation: StackNavigationProp<DeskStackParams, AppRoutes.Settings>;
  route: RouteProp<DeskStackParams, AppRoutes.Settings>;
}

export const Settings: React.FC<SettingsNavigationProps> = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    removeItem(userToken)
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
