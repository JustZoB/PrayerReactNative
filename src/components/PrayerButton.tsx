import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPrayerById, getPrayerChecked, getPrayerTitle } from '../store/prayers/selectors';
import { RootState } from '../store/store';
import colors from '../utils/colors'
import CheckBox from '@react-native-community/checkbox';
import { checkPrayerStart } from '../store/prayers/actions';
import { Add, PrayerIcon, User } from '../assets/svg';

interface PrayerButtonProps {
  id: number;
  onPress?: Function;
}

export const PrayerButton: React.FC<PrayerButtonProps> = ({ id, onPress }) => {
  const dispatch = useDispatch();
  const prayersList = useSelector((state: RootState) => state.prayersSlice);
  const title = useSelector((state: RootState) => getPrayerTitle(state.prayersSlice, id));
  const isChecked = useSelector((state: RootState) => getPrayerChecked(state.prayersSlice, id));
  const prayer = (useSelector((state: RootState) => getPrayerById(state.prayersSlice, id)));

  const checkPrayer = () => {
    dispatch(checkPrayerStart({ id, checked: !isChecked }))
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
    >
      <View style={styles.textContainer}>
        <View style={styles.stick} />
        <CheckBox
          value={isChecked}
          onValueChange={checkPrayer}
          style={styles.checkbox}
        />
        <Text numberOfLines={1} style={styles.text}>
          {title}
        </Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.iconContainer}>
          <User />
          <Text style={styles.number}>3</Text>
        </View>
        <View style={styles.iconContainer}>
          <PrayerIcon />
          <Text style={styles.number}>123</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
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
    maxWidth: '100%',
    color: colors.black,
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 5,
  },
  number: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.black,
    marginLeft: 5,
  }
});
