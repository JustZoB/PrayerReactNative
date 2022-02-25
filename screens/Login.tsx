import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Button, StyleSheet, Text, SafeAreaView, TextInput, View, TouchableOpacity } from 'react-native';
import axios from '../api/axios';
import CheckBox from '@react-native-community/checkbox';
import { AuthStackParams } from '../navigators/AuthStackNavigator';

export const Login: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const [email, setEmail] = React.useState<string>(null);
  const [password, setPassword] = React.useState<string>(null);
  const [errorMessage, setErrorMessage] = React.useState<string>(null);
  const [token, setToken] = React.useState<string>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPasswordShown, setIsPasswordShown] = React.useState<boolean>(false);

  const onSignIn = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post(`/auth/sign-in`, {
        email: email,
        password: password
      });

      if (response.status === 200) {
        setToken(response.data.token)

        // setEmail('')
        // setPassword('')
        console.log(response.data.token);

        setIsLoading(false)
      } else {

        alert(response.status)
        console.log(response.status);

        setIsLoading(false)
      }
    } catch (error) {
      setErrorMessage(error)

      alert(error)
      console.log(error)

      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        Sign In
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
          editable={!isLoading}
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
          autoComplete='password'
          editable={!isLoading}
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
        disabled={isLoading}
        color={'#BFB393'}
        title="Sign In"
        onPress={onSignIn}
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
  showPasswordBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
  },
  checkbox: {
    alignSelf: 'center',
  }
});
