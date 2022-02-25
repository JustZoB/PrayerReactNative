import React from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import { Desk } from './screens/Desk';

const RootStack = createNativeStackNavigator();

const App: () => ReactNode = () => {
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
