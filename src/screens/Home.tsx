import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppLoader } from '../components/AppLoader';
import { Button } from '../components/Button';
import { addColumnStart, getColumnsStart } from '../store/columns/actions';
import { RootState } from '../store/store';
import { ColumnButton } from '../components/ColumnButton';
import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { Settings } from '../assets/svg';
import { Field, Form } from 'react-final-form';
import colors from '../utils/colors';
import { TextField } from '../components/TextField';
import { columnValidate } from '../utils/validate';

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

  const onAddColumn = (values: { title: string }) => {
    dispatch(addColumnStart({
      title: values.title
    }))
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
        <Form
          onSubmit={onAddColumn}
          validate={columnValidate}
          render={({ handleSubmit, submitting, form }) => (
            <>
              <Field
                name='title'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      value={input.value}
                      placeholder='Add a column...'
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <Text style={styles.textFieldError}>{meta.error}</Text>}
                  </View>
                )}
              />

              <Button
                title='Add Column'
                disabled={submitting}
                onPress={() => {
                  handleSubmit()
                  form.reset()
                }}
              />
              {columnsList.error &&
                <>
                  {columnsList.error.name === "EntityNotFound"
                    ? <Text style={styles.errorMessage}>Server error: No such user exists</Text>
                    : <Text style={styles.errorMessage}>Server error: {columnsList.error.message}</Text>
                  }
                </>
              }
            </>
          )}
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
  inputContainer: {
    marginBottom: 15,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.red,
    marginTop: 10,
  },
  textFieldError: {
    position: 'absolute',
    top: 13,
    right: 10,
    fontSize: 16,
    color: colors.red,
  },
});
