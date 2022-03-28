import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getPrayerChecked, getPrayerTitle } from '../store/prayers/selectors';
import { RootState } from '../store/store';
import colors from '../utils/colors'
import CheckBox from '@react-native-community/checkbox';

interface PrayerButtonProps {
  id: number;
  onPress?: Function;
}

export const PrayerButton: React.FC<PrayerButtonProps> = ({ id, onPress }) => {
  const prayersList = useSelector((state: RootState) => state.prayersSlice);
  const title = useSelector((state: RootState) => getPrayerTitle(prayersList, id));
  const [isChecked, setIsChecked] = useState(useSelector((state: RootState) => getPrayerChecked(prayersList, id)));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
    >
      <View style={styles.stick} />
      <CheckBox
        value={isChecked}
        onValueChange={() => setIsChecked(!isChecked)}
        style={styles.checkbox}
      />
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  stick: {
    width: 3,
    backgroundColor: colors.darkRed,
    height: 22,
    borderRadius: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 5,
  },
});
