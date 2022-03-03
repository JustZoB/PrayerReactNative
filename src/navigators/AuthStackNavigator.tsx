import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";

export type AuthStackParams = {
  Login;
  SignUp;
}

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
    </AuthStack.Navigator>
  );
}
