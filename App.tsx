import React from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { Desk } from './src/screens/Desk';
import store from './src/store/store';

const RootStack = createNativeStackNavigator();

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
          <RootStack.Screen name={'HomeStack'} component={Desk} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
