import AsyncStorage from '@react-native-async-storage/async-storage';
import { logInSuccess } from './userLogin/reducers';

export const setItem = async (name: string, item: string) => {
  try {
    AsyncStorage.setItem(name, item)
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken')
    const name = await AsyncStorage.getItem('userName')
    const email = await AsyncStorage.getItem('userEmail')
    if (token && name && email) {
      console.log('qqqqqq', { user: { name, email, token } })
      logInSuccess({ user: { name, email, token } })
    }
  } catch (error) {
    console.log(error)
  }
}
