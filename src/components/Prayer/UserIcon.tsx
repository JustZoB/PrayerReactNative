import React from "react";
import { Image } from "react-native";

export const UserIcon: React.FC = (props) => {
  return (
    <Image
      source={require('../../assets/svg/user.png')}
      {...props}
    />
  )
}
