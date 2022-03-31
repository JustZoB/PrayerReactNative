import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../utils/colors'
import { Home } from "../screens/Home";
import { Prayer } from "../screens/Prayer";
import { Settings } from "../screens/Settings";
import { ColumnTabNavigator } from "./ColumnTabNavigator";

export type DeskStackParams = {
  Home;
  Prayer;
  Settings;
  ColumnTabNavigator: { id: number };
}

const DeskStack = createStackNavigator<DeskStackParams>();

export const DeskStackNavigator: React.FC = () => {
  return (
    <DeskStack.Navigator
      screenOptions={{
        headerStyle: {
          borderColor: colors.gray,
          borderStyle: 'solid',
          borderBottomWidth: 1,
        },
        cardStyle: { backgroundColor: colors.white }
      }}
    >
      <DeskStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'My Desk',
          headerTitleAlign: 'center',
        }}
      />
      <DeskStack.Screen
        name="ColumnTabNavigator"
        component={ColumnTabNavigator}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            borderBottomWidth: 0,
          }
        }}
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
      <DeskStack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
        }}
      />
    </DeskStack.Navigator>
  );
}
