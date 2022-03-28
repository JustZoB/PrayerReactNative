import React, { useEffect } from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyPrayers } from "../screens/MyPrayers";
import { SubscribedPrayers } from "../screens/SubscribedPrayers";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getColumnTitle } from "../store/columns/selectors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DeskStackParams } from "./DeskStackNavigator";

type Props = NativeStackScreenProps<DeskStackParams, 'ColumnTabNavigator'>;

export type ColumnTabParams = {
  MyPrayers;
  SubscribedPrayers;
}

const Tab = createMaterialTopTabNavigator<ColumnTabParams>();

export const ColumnTabNavigator: React.FC<Props> = ({ route, navigation }) => {
  // const columnsList = useSelector((state: RootState) => state.columnsSlice);
  const title = useSelector((state: RootState) => getColumnTitle(state.columnsSlice, route.params.id));
  console.log('TITLE', title)

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
