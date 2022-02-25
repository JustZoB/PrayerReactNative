import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Button, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import axios from '../api/axios';
import { AuthStackParams } from '../navigators/AuthStackNavigator';

export const SignUp: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const [email, setEmail] = React.useState<string>(null);
  const [name, setName] = React.useState<string>(null);
  const [password, setPassword] = React.useState<string>(null);
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false);

  const onSignUp = () => {
    axios.post(`/auth/sign-up`, {
      email: email,
      name: name,
      password: password
    })
      .then(function (response) {
        console.log(response.data);
        setEmail('')
        setName('')
        setPassword('')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Sign Up
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>
          E-mail:
        </Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='E-mail'
          autoComplete='email'
          maxLength={256}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>
          Name:
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder='Name'
          autoComplete='name'
          maxLength={256}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>
          Password:
        </Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder='Password'
          textContentType='password'
          autoComplete='password'
          maxLength={256}
          secureTextEntry={!isPasswordShown}
        />
        <View style={styles.showPasswordBlock}>
          <CheckBox
            value={isPasswordShown}
            onValueChange={(newValue) => setIsPasswordShown(newValue)}
            style={styles.checkbox}
          />
          <Text>Show Password</Text>
        </View>
      </View>
      <Button
        color={'#BFB393'}
        title="Sign Up"
        onPress={onSignUp}
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
  inputContainer: {
    marginBottom: 15,
  },
  textInput: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 17,
    lineHeight: 20,
    width: '100%',
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
  showPasswordBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  checkbox: {
    alignSelf: 'center',
  }
});
