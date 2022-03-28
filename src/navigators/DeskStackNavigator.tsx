import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { ColumnTabNavigator } from "./ColumnTabNavigator";
import { Prayer } from "../screens/Prayer";
import colors from '../utils/colors'

export type DeskStackParams = {
  Home;
  Prayer;
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
      <DeskStack.Screen
        name="Prayer"
        component={Prayer}
        options={{
          title: 'Prayer item two which is for my family to love God whole heartedly.',
          headerStyle: {
            backgroundColor: colors.beige,
            height: 130,
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
