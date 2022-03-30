import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Form, Field } from 'react-final-form'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AuthStackParams } from '../navigators/AuthStackNavigator';
import colors from '../utils/colors'
import { loginValidate } from '../utils/validate';
import { RootState } from '../store/store';
import { logInStart } from '../store/userLogin/action';
import { clearLogInErrors } from '../store/userLogin/reducers';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { AppLoader } from '../components/AppLoader';
import { ErrorMessage } from '../components/ErrorMessage';
import { TextFieldError } from '../components/TextFieldError';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
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
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
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
                    {meta.touched && meta.error && <TextFieldError text={meta.error} />}
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
                    ? <ErrorMessage text={'No such user exists'} />
                    : <ErrorMessage text={auth.error.message} />
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
});
