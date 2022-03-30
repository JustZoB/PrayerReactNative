import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { AuthStackParams } from '../navigators/AuthStackNavigator';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';

import { singUpValidate } from '../utils/validate';
import colors from '../utils/colors'
import { RootState } from '../store/store';
import { clearLogInErrors } from '../store/userLogin/reducers';
import { registerStart } from '../store/userLogin/action';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { AppLoader } from '../components/AppLoader';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const auth = useSelector((state: RootState) => state.userLoginSlice);

  const navigateToSignIn = () => {
    dispatch(clearLogInErrors())
    navigation.navigate('Login')
  }

  const onSignUp = (values: { email: string, name: string, password: string }) => {
    dispatch(clearLogInErrors())
    dispatch(registerStart({
      email: values.email,
      name: values.name,
      password: values.password
    }))
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>
          Sign Up
        </Text>
        <Form
          onSubmit={onSignUp}
          validate={singUpValidate}
          render={({ handleSubmit }) => (
            <>
              <Field
                name='email'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      placeholder='E-mail'
                      value={input.value}
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
                  </View>
                )}
              />
              <Field
                name='name'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      placeholder='Name'
                      value={input.value}
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
                  </View>
                )}
              />
              <Field
                name='password'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      placeholder='Password'
                      value={input.value}
                      onTextChange={input.onChange}
                      isSecure={true}
                    />
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
                  </View>
                )}
              />

              <Button
                title='Sign Up'
                onPress={handleSubmit}
              />
              {auth.error &&
                <>
                  {auth.error.name === "QueryFailedError"
                    ? <ErrorMessage text={'This e-mail is already taken'} />
                    : <ErrorMessage text={auth.error.message} />
                  }
                </>
              }
            </>
          )}
        />

        <View style={styles.signInBlock}>
          <Text style={styles.singInText}>
            Already have an account?
            <TouchableOpacity
              onPress={navigateToSignIn}
            >
              <Text style={styles.link}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
      {auth.loading &&
        <AppLoader />
      }
    </>
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
  textInput: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  signInBlock: {
    marginTop: 20,
  },
  singInText: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: colors.lightBlue,
    paddingLeft: 5,
  },
});
