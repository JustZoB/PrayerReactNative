import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { ColumnTabNavigator } from "./ColumnTabNavigator";

export type DeskStackParams = {
  Home;
  ColumnTabNavigator;
}

const DeskStack = createStackNavigator<DeskStackParams>();

export const DeskStackNavigator: React.FC = () => {
  return (
    <DeskStack.Navigator>
      <DeskStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'My Desk' }}
      />
      <DeskStack.Screen
        name="ColumnTabNavigator"
        component={ColumnTabNavigator}
        options={{ title: 'Column' }}
      />
    </DeskStack.Navigator>
  );
}
