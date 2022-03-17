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

  const validate = (values: { userName?: string }) => {
    let errors = {};

    if (values.userName && values.userName.length > 20) {
      errors = { ...errors, userName: 'Too long' }
    }

    return errors
  }

  const onSignIn = () => {
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
        render={({ handleSubmit }) => (
          <>
            <Field
              name='email'
              render={({ input, meta }) => (
                <View style={styles.inputContainer}>
                  <TextField
                    placeholder='E-mail'
                    onTextChange={setEmail}
                  />
                  {meta.touched && meta.error && <Text>{meta.error}</Text>}
                </View>
              )}
            />
            <Field
              name='password'
              render={({ input, meta }) => (
                <View style={styles.inputContainer}>
                  <TextField
                    placeholder='Password'
                    onTextChange={setPassword}
                    isSecure={true}
                  />
                  {meta.touched && meta.error && <Text>{meta.error}</Text>}
                </View>
              )}
            />

            <Button
              title='Sign In'
              onPress={onSignIn}
            />
            {auth.error &&
              <Text style={styles.errorMessage}>Server error: {auth.error.message}</Text>
            }
          </>
        )}
      />

      <View style={styles.signUpBlock}>
        <Text style={styles.singUpText}>
          Don't have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
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
});
