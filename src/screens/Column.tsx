import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { ColumnRouteType } from '../services/navigationProps';
import { getColumnTitle } from '../store/columns/selectors';
import { RootState } from '../store/store';

export const Column: React.FC<ColumnProps> = ({ route }) => {
  // const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const columnsList = useSelector((state: RootState) => state.columnsSlice);
  const title = useSelector((state: RootState) => getColumnTitle(columnsList, route.params.id));
  console.log(route.params.id)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
});

interface ColumnProps {
  route: ColumnRouteType;
}
