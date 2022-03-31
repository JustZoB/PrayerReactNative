import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import colors from '../utils/colors'
import { RootState } from '../store/store';
import { getColumnTitle } from '../store/columns/selectors';

interface ColumnProps {
  id: number;
  onPress(): void;
}

export const ColumnButton: React.FC<ColumnProps> = ({ id, onPress }) => {
  const title = useSelector((state: RootState) => getColumnTitle(state.columnsSlice, id));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.columnButton}>
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
  columnButton: {
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
    fontWeight: 'bold',
  },
});
