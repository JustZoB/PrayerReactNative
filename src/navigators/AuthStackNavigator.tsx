import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";
import colors from "../utils/colors";
import AppRoutes from "../utils/routes";

export type AuthStackParams = {
  [AppRoutes.Login]: undefined;
  [AppRoutes.SignUp]: undefined;
}

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white }
      }}
    >
      <AuthStack.Screen
        name={AppRoutes.Login}
        component={Login}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <AuthStack.Screen
        name={AppRoutes.SignUp}
        component={SignUp}
        options={{
          title: 'Sign Up',
          headerTitleAlign: 'center',
        }}
      />
    </AuthStack.Navigator>
  );
}
