import React from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useSelector } from "react-redux";

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { Desk } from './src/screens/Desk';
import store, { RootState } from './src/store/store';
import { getUser } from './src/store/asyncStorage';

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

  React.useEffect(() => {
    getUser()
  }, [])

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
