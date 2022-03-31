import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View, ScrollView, Modal, Pressable, Text, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form } from 'react-final-form';

import { DeskStackParams } from '../navigators/DeskStackNavigator';
import { columnValidate } from '../utils/validate';
import { RootState } from '../store/store';
import { addColumnStart, getColumnsStart } from '../store/columns/actions';
import { Add } from '../assets/svg';
import { AppLoader } from '../components/AppLoader';
import { ColumnButton } from '../components/ColumnButton';
import { TextField } from '../components/TextField';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';
import colors from '../utils/colors';

export const Home: React.FC = ({ }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<DeskStackParams>>();
  const columnsList = useSelector((state: RootState) => state.columnsSlice);

  React.useEffect(() => {
    dispatch(getColumnsStart())
    navigation.setOptions({
      headerRight: () => (
        <Add onPress={() => setModalVisible(true)} />
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
        <Modal
          transparent
          visible={modalVisible}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.modal}>
              <TouchableWithoutFeedback>
                <View style={styles.modalInner}>
                  <Form
                    onSubmit={onAddColumn}
                    validate={columnValidate}
                    render={({ handleSubmit, submitting, form }) => (
                      <>
                        <Field
                          name='title'
                          render={({ input, meta }) => (
                            <View>
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
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

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
  commentIcon: {
    position: 'absolute',
    top: 28,
    left: 28,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    padding: 15,
    borderRadius: 10,
    width: '90%',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
