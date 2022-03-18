import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { AuthStackParams } from '../navigators/AuthStackNavigator';

import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { logInStart } from '../store/userLogin/action';
import { RootState } from '../store/store';
import { clearLogInErrors } from '../store/userLogin/reducers';

export const Login: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.userLoginSlice);

  // useEffect(() => {
  //   if (user !== undefined) {
  //     // navigate to Desk
  //     // useNavigation('Desk')
  //   }
  // }, [user])

  const navigateToSignUp = () => {
    dispatch(clearLogInErrors({}))
    setEmail('')
    setPassword('')
    navigation.navigate('SignUp')
  }

  const validate = (values: { email: string, password: string }) => {
    const errors: { email?: string, password?: string } = {}

    console.log(values)

    // if (!values.email) {
    //   errors.email = 'Required'
    // }
    if (values.email && values.email.length > 20) {
      errors.email = 'Too long'
    }
    // if (!values.password) {
    //   errors.password = 'Required'
    // }
    if (values.password && values.password.length > 20) {
      errors.password = 'Too long'
    }

    console.log(errors)

    return errors
  }

  const onSignIn = () => {
    dispatch(clearLogInErrors({}))
    dispatch(logInStart({ email, password }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Sign In
      </Text>
      <Form
        onSubmit={onSignIn}
        validate={validate}
        render={({ handleSubmit, form, submitting, values }) => (
          <>
            <Field
              name='email'
              render={({ input, meta }) => (
                <View style={styles.inputContainer}>
                  <TextField
                    {...input}
                    value={email}
                    placeholder='E-mail'
                    onTextChange={setEmail}
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
                    value={password}
                    onTextChange={setPassword}
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
            <Text>{JSON.stringify(values)}</Text>
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
    color: '#72A8BC',
    paddingLeft: 5,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
  textFieldError: {
    position: 'absolute',
    top: 13,
    right: 10,
    fontSize: 16,
    color: 'red',
  },
});
