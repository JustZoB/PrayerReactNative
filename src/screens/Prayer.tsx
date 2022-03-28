import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { PrayerRouteType } from '../services/navigationProps';
import { getPrayerTitle } from '../store/prayers/selectors';
import { RootState } from '../store/store';

interface PrayerProps {
  route: PrayerRouteType;
}

export const Prayer: React.FC<PrayerProps> = ({ route }) => {
  const title = useSelector((state: RootState) => getPrayerTitle(state.prayersSlice, route.params.id));

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Prayer {title}</Text>
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
