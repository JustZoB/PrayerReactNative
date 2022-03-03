import React from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { Desk } from './src/screens/Desk';
import { useSelector } from 'react-redux';

const RootStack = createNativeStackNavigator();

const App: () => ReactNode = () => {
  const store = useSelector(store => store)

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
        <RootStack.Screen name={'HomeStack'} component={Desk} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
