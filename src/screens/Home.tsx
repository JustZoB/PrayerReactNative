import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../components/AppLoader';
import { Button } from '../components/Button';
import { getColumnsStart } from '../store/columns/actions';
import { RootState } from '../store/store';
import { logOut } from '../store/userLogin/reducers';
import { ColumnButton } from '../components/ColumnButton';
import { DeskStackParams } from '../navigators/DeskStackNavigator';

export const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const auth = useSelector((state: RootState) => state.userLoginSlice);
  const columnsList = useSelector((state: RootState) => state.columnsSlice);
  const dispatch = useDispatch();
  const DeskStack = createNativeStackNavigator();

  React.useEffect(() => {
    dispatch(getColumnsStart())
  }, [])

  const onLogOut = () => {
    AsyncStorage.removeItem('userToken')
    AsyncStorage.removeItem('userName')
    AsyncStorage.removeItem('userEmail')
    dispatch(logOut())
  }

  return (
    <>
      {columnsList.isDataLoaded &&
        <AppLoader />
      }
      <SafeAreaView style={styles.container}>
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
          title='Log out'
          onPress={onLogOut}
        />
      </SafeAreaView>
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
