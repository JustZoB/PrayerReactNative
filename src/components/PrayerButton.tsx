import React from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import { Swipeable, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../utils/colors'
import { RootState } from '../store/store';
import { getPrayerChecked, getPrayerTitle } from '../store/prayers/selectors';
import { checkPrayerStart, deletePrayerStart } from '../store/prayers/actions';
import { PrayerIcon } from '../assets/svg';
import { UserIcon } from './Prayer/UserIcon';

interface PrayerButtonProps {
  id: number;
  onPress?: Function;
  textDecoration?: string;
}

export const PrayerButton: React.FC<PrayerButtonProps> = ({ id, onPress, textDecoration }) => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => getPrayerTitle(state.prayersSlice, id));
  const isChecked = useSelector((state: RootState) => getPrayerChecked(state.prayersSlice, id));

  const checkPrayer = () => {
    dispatch(checkPrayerStart({ id, checked: !isChecked }))
  }

  const deletePrayer = () => {
    dispatch(deletePrayerStart({ id }))
  }

  const rightActions = () => {
    return (
      <View style={styles.swipedRow}>
        <Animated.View style={styles.deleteButton}>
          <TouchableOpacity onPress={deletePrayer}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={rightActions} overshootRight={false}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => onPress()}
      >
        <View style={styles.textContainer}>
          <View style={styles.stick} />
          <CheckBox
            value={isChecked}
            onFillColor={colors.black}
            onCheckColor={colors.white}
            onValueChange={checkPrayer}
            style={styles.checkbox}
          />
          <Text
            numberOfLines={1}
            style={propsStyles({ textDecoration }).text}
          >
            {title}
          </Text>
        </View>

        <View style={styles.iconsContainer}>
          <View style={styles.iconContainer}>
            <UserIcon />
            <Text style={styles.number}>3</Text>
          </View>
          <View style={styles.iconContainer}>
            <PrayerIcon />
            <Text style={styles.number}>123</Text>
          </View>
        </View>

      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

const propsStyles = ({ textDecoration }) =>
  StyleSheet.create({
    text: {
      fontSize: 17,
      lineHeight: 20,
      maxWidth: '100%',
      color: colors.black,
      textDecorationLine: textDecoration
    },
  })

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.gray,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: colors.white,
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
  },
  swipedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  deleteButton: {
    backgroundColor: colors.darkRed,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteButtonText: {
    fontSize: 13,
    lineHeight: 15,
    color: colors.white,
  },
});
