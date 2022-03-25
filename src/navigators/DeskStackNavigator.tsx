import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { Column } from "../screens/Column";

export type DeskStackParams = {
  Home;
  Column;
}

const DeskStack = createStackNavigator<DeskStackParams>();

export const DeskStackNavigator: React.FC = () => {
  return (
    <DeskStack.Navigator>
      <DeskStack.Screen name="Home" component={Home} />
      <DeskStack.Screen name="Column" component={Column} />
    </DeskStack.Navigator>
  );
}
