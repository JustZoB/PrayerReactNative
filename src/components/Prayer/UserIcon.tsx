import React from "react";
import { Image } from "react-native";
import { User } from "../../assets/svg";

export const UserIcon: React.FC = (props) => {
  return (
    <Image
      source={User}
      {...props}
    />
  )
}
