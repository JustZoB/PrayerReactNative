import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { CircleNumber } from '../components/CircleNumber';
import { ColumnTabParams } from '../navigators/ColumnTabNavigator';
import colors from '../utils/colors';
import AppRoutes from '../utils/routes';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

type SubscribedPrayersNavigationProps = {
  navigation: MaterialTopTabNavigationProp<ColumnTabParams, AppRoutes.SubscribedPrayers>;
  route: RouteProp<ColumnTabParams, AppRoutes.SubscribedPrayers>;
}

export const SubscribedPrayers: React.FC<SubscribedPrayersNavigationProps> = ({ navigation, route }) => {
  // const tabNavigation = useNavigation<NativeStackNavigationProp<ColumnTabParams>>();

  // tabNavigation.setOptions({
  //   headerRight: () => (
  //     <CircleNumber />
  //   ),
  // })

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>SubscribedPrayers</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
    backgroundColor: colors.white,
  },
});
