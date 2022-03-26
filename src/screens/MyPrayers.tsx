import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { ColumnRouteType } from '../services/navigationProps';

interface ColumnProps {
  route: ColumnRouteType;
}

export const MyPrayers: React.FC<ColumnProps> = ({ route }) => {
  console.log(route.params.id)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>MyPrayers</Text>
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
