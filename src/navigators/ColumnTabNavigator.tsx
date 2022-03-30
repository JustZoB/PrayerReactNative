import React, { useEffect } from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from "react-redux";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootState } from "../store/store";
import { getColumnTitle } from "../store/columns/selectors";
import { MyPrayers } from "../screens/MyPrayers";
import { SubscribedPrayers } from "../screens/SubscribedPrayers";
import { DeskStackParams } from "./DeskStackNavigator";
import { Settings } from "../assets/svg";

type Props = NativeStackScreenProps<DeskStackParams, 'ColumnTabNavigator'>;

export type ColumnTabParams = {
  MyPrayers;
  SubscribedPrayers;
}

const Tab = createMaterialTopTabNavigator<ColumnTabParams>();

export const ColumnTabNavigator: React.FC<Props> = ({ route, navigation }) => {
  const stackNavigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const title = useSelector((state: RootState) => getColumnTitle(state.columnsSlice, route.params.id));
  console.log('TITLE', title)

  stackNavigation.setOptions({
    headerRight: () => (
      <Settings onPress={() => {
        navigation.navigate('Settings')
      }} />
    ),
  })

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title, navigation]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyPrayers"
        component={MyPrayers}
        options={{ title: 'My Prayers' }}
        initialParams={{ id: route.params.id }}
      />
      <Tab.Screen
        name="SubscribedPrayers"
        component={SubscribedPrayers}
        options={{ title: 'Subscribed' }}
      />
    </Tab.Navigator>
  );
}
