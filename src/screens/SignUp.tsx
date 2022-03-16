import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import axios from '../../api/axios';
import { AuthStackParams } from '../navigators/AuthStackNavigator';
import { TextField } from '../components/TextField';
import { Button } from '../components/Button';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { registerStart } from '../store';

export const SignUp: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch()

  const validate = (values: { userName?: string }) => {
    let errors = {};

    if (values.userName && values.userName.length > 20) {
      errors = { ...errors, userName: 'Too long' }
    }

    return errors
  }

  const onSignUp = () => {
    console.log(email, name, password)
    dispatch(registerStart(email, name, password))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Sign Up
      </Text>
      <Form
        onSubmit={onSignUp}
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
              name='name'
              render={({ input, meta }) => (
                <View style={styles.inputContainer}>
                  <TextField
                    placeholder='Name'
                    onTextChange={setName}
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
              title='Sign Up'
              onPress={onSignUp}
            />
          </>
        )}
      />

      <View style={styles.signInBlock}>
        <Text style={styles.singInText}>
          Already have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.link}>Sign In</Text>
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
    color: '#72A8BC',
    paddingLeft: 5,
  },
  errorMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
  }
});
