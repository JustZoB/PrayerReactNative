import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../utils/colors'
import { Home } from "../screens/Home";
import { Prayer } from "../screens/Prayer";
import { Settings } from "../screens/Settings";
import { ColumnTabNavigator } from "./ColumnTabNavigator";
import AppRoutes from "../utils/routes";

export type DeskStackParams = {
  [AppRoutes.Home]: undefined;
  [AppRoutes.Prayer]: { id: number };
  [AppRoutes.Settings]: undefined;
  [AppRoutes.ColumnTabNavigator]: { id: number };
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
        name={AppRoutes.Home}
        component={Home}
        options={{
          title: 'My Desk',
          headerTitleAlign: 'center',
        }}
      />
      <DeskStack.Screen
        name={AppRoutes.ColumnTabNavigator}
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
        name={AppRoutes.Prayer}
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
        name={AppRoutes.Settings}
        component={Settings}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
        }}
      />
    </DeskStack.Navigator>
  );
}
