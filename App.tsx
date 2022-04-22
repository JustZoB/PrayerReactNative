import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from "react-redux";

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import store, { RootState } from './src/store/store';
import { AppLoader } from './src/components/AppLoader';
import { getTokenStart } from './src/store/userLogin/action';
import { DeskStackNavigator } from './src/navigators/DeskStackNavigator';

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const AppWrapper: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export const App: React.FC = () => {
  const auth = useSelector((state: RootState) => state.userLoginSlice);
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTokenStart())
  }, [])

  return (
    <>
      {auth.isDataLoaded ? (
        <AppLoader />
      ) :
        <>
          {auth.user ? (
            <NavigationContainer>
              <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                <HomeStack.Screen name={'AuthStack'} component={DeskStackNavigator} />
              </HomeStack.Navigator>
            </NavigationContainer>
          ) : (
            <NavigationContainer>
              <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
              </RootStack.Navigator>
            </NavigationContainer>
          )}
        </>
      }
    </>

  )
}

export default AppWrapper;
