import { AppRegistry } from "react-native";
import AppWrapper from "./App";
import { name as appName } from "./app.json";
import React from "react";

AppRegistry.registerComponent(appName, () => () => (
  <AppWrapper />
));
