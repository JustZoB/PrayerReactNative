import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { ColumnTabNavigator } from "./ColumnTabNavigator";
import { Prayer } from "../screens/Prayer";
import colors from '../utils/colors'

export type DeskStackParams = {
  Home;
  Prayer;
  ColumnTabNavigator: { id: number };
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
        options={{ title: '' }}
      />
      <DeskStack.Screen
        name="Prayer"
        component={Prayer}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.beige,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontSize: 17,
          },
        }}
      />
    </DeskStack.Navigator>
  );
}
