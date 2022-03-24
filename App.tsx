import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { Desk } from './src/screens/Desk';
import store, { RootState } from './src/store/store';

const RootStack = createNativeStackNavigator();

const AppWrapper: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export const App: React.FC = () => {
  const auth = useSelector((state: RootState) => state.userLoginSlice);
  const [token, setToken] = useState<string>('')

  React.useEffect(() => {
    getToken()
  }, [])

  const getToken = async () => {
    try {
      await AsyncStorage.getItem('userToken').then(value => {
        if (value !== null) {
          setToken(value)
          console.log('Token: ', token)
        }
      })
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return (
    <>
      {auth.user ? (
        <Desk />
      ) : (
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
            <RootStack.Screen name={'HomeStack'} component={Desk} />
          </RootStack.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}

export default AppWrapper;
