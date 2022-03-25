import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getColumnTitle } from '../store/columns/selectors';
import { RootState } from '../store/store';
import colors from '../utils/colors'

interface ColumnProps {
  id: number;
  onPress: Function;
}

export const Column: React.FC<ColumnProps> = ({ id, onPress }) => {
  const columnsList = useSelector((state: RootState) => state.columnsSlice);
  const title = useSelector((state: RootState) => getColumnTitle(columnsList, id));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
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
