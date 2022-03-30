import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form } from 'react-final-form';

import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { columnValidate } from '../utils/validate';
import { RootState } from '../store/store';
import { addColumnStart, getColumnsStart } from '../store/columns/actions';
import { Add, Settings } from '../assets/svg';
import { AppLoader } from '../components/AppLoader';
import { ColumnButton } from '../components/ColumnButton';
import { TextField } from '../components/TextField';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';

export const Home: React.FC = ({ }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const columnsList = useSelector((state: RootState) => state.columnsSlice);

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
                      paddingLeft={48}
                      placeholder='Add a column...'
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
                  </View>
                )}
              />

              <Add
                style={styles.commentIcon}
                disabled={submitting}
                onPress={() => {
                  handleSubmit()
                  form.reset()
                }}
              />
              {columnsList.error &&
                <ErrorMessage text={columnsList.error.message} />
              }
            </>
          )}
        />
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
    marginBottom: 10,
  },
  commentIcon: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
});
