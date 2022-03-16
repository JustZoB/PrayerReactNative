import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { RootState } from '../store/store';
import { logOut } from '../store/userLogin/reducers';
import { Column } from './Column';

export const Desk: React.FC = () => {
  const auth = useSelector((state: RootState) => state.userLoginSlice);
  const columnsList = useSelector((state: RootState) => state.columnsSlice);
  const dispatch = useDispatch();
  console.log(columnsList)

  const onLogOut = () => {
    dispatch(logOut({}))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Desk {auth.user.name}
        {/* {columnsList.columns.map(({ id }) => (
          <Column
            key={id}
            id={id}
          />
        ))} */}
        <Button
          title='Log out'
          onPress={onLogOut}
        />
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});
