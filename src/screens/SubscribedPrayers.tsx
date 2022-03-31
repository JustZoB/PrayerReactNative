import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { CircleNumber } from '../components/CircleNumber';
import { ColumnTabParams } from '../navigators/ColumnTabNavigator';

export const SubscribedPrayers: React.FC = () => {
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
  },
});
