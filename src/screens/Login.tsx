import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Form, Field } from 'react-final-form'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { AuthStackParams } from '../navigators/AuthStackNavigator';
import colors from '../utils/colors'

import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { logInStart } from '../store/userLogin/action';
import { RootState } from '../store/store';
import { clearLogInErrors } from '../store/userLogin/reducers';
import { AppLoader } from '../components/AppLoader';
import { loginValidate } from '../utils/validate';

export const Login: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.userLoginSlice);

  const navigateToSignUp = () => {
    dispatch(clearLogInErrors())
    navigation.navigate('SignUp')
  }

  const onSignIn = (values: { email: string, password: string }) => {
    dispatch(clearLogInErrors())
    dispatch(logInStart({
      email: values.email,
      password: values.password
    }))
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>
          Sign In
        </Text>
        <Form
          onSubmit={onSignIn}
          validate={loginValidate}
          render={({ handleSubmit, submitting }) => (
            <>
              <Field
                name='email'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      {...input}
                      value={input.value}
                      placeholder='E-mail'
                      onTextChange={input.onChange}
                    />
                    {meta.touched && meta.error && <Text style={styles.textFieldError}>{meta.error}</Text>}
                  </View>
                )}
              />
              <Field
                name='password'
                render={({ input, meta }) => (
                  <View style={styles.inputContainer}>
                    <TextField
                      {...input}
                      placeholder='Password'
                      value={input.value}
                      onTextChange={input.onChange}
                      isSecure={true}
                    />
                    {meta.touched && meta.error && <Text style={styles.textFieldError}>{meta.error}</Text>}
                  </View>
                )}
              />

              <Button
                title='Sign In'
                disabled={submitting}
                onPress={handleSubmit}
              />
              {auth.error &&
                <>
                  {auth.error.name === "EntityNotFound"
                    ? <Text style={styles.errorMessage}>Server error: No such user exists</Text>
                    : <Text style={styles.errorMessage}>Server error: {auth.error.message}</Text>
                  }
                </>
              }
            </>
          )}
        />

        <View style={styles.signUpBlock}>
          <Text style={styles.singUpText}>
            Don't have an account?
            <TouchableOpacity
              onPress={navigateToSignUp}
            >
              <Text style={styles.link}>Sign Up</Text>
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
  inputContainer: {
    marginBottom: 15,
  },
  signUpBlock: {
    marginTop: 20,
  },
  singUpText: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    color: colors.lightBlue,
    paddingLeft: 5,
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
