import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getPrayerTitle } from '../store/prayers/selectors';
import { RootState } from '../store/store';
import colors from '../utils/colors'

interface PrayerButtonProps {
  id: number;
  onPress?: Function;
}

export const PrayerButton: React.FC<PrayerButtonProps> = ({ id, onPress }) => {
  const prayersList = useSelector((state: RootState) => state.prayersSlice);
  const title = useSelector((state: RootState) => getPrayerTitle(prayersList, id));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
    >
      <Text style={styles.prayerButton}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
  },
  prayerButton: {
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
    fontWeight: 'bold',
  },
});
