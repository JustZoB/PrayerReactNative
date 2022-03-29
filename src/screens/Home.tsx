import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../components/AppLoader';
import { Button } from '../components/Button';
import { getColumnsStart } from '../store/columns/actions';
import { RootState } from '../store/store';
import { ColumnButton } from '../components/ColumnButton';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { Settings } from '../assets/svg';

export const Home: React.FC = ({ }) => {
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const columnsList = useSelector((state: RootState) => state.columnsSlice);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getColumnsStart())
    navigation.setOptions({
      headerRight: () => (
        <Settings onPress={() => {
          navigation.navigate('Settings')
        }} />
      )
    })
  }, [navigation])

  const onAddColumn = () => {
    console.log('add column')
  }

  return (
    <>
      {columnsList.isDataLoaded &&
        <AppLoader />
      }
      <ScrollView style={styles.container}>
        <View>
          {columnsList.columns &&
            <>
              {columnsList.columns.map(({ id }) => (
                <ColumnButton
                  key={id}
                  id={id}
                  onPress={() => {
                    navigation.navigate('ColumnTabNavigator', { id })
                  }}
                />
              ))}
            </>
          }
        </View>
        <Button
          title='Add Column'
          onPress={onAddColumn}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});
