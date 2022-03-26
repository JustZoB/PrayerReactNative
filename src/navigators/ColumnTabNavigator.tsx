import React from "react"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MyPrayers } from "../screens/MyPrayers";
import { SubscribedPrayers } from "../screens/SubscribedPrayers";
import { ColumnRouteType } from "../services/navigationProps";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getColumnTitle } from "../store/columns/selectors";

export type ColumnTabParams = {
  MyPrayers;
  SubscribedPrayers;
}

interface ColumnProps {
  route: ColumnRouteType;
}

const Tab = createMaterialTopTabNavigator<ColumnTabParams>();

export const ColumnTabNavigator: React.FC<ColumnProps> = ({ route }) => {
  // const columnsList = useSelector((state: RootState) => state.columnsSlice);
  // const title = useSelector((state: RootState) => getColumnTitle(columnsList, route.params.id));

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
