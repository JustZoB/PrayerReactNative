import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (name: string, item: string) => {
  try {
    await AsyncStorage.setItem(name, item)
  } catch (error) {
    console.log(error)
  }
}

export const removeItem = async (name: string) => {
  AsyncStorage.removeItem(name)
}

export const getTokenAsyncStorage = async () => {
  return await AsyncStorage.getItem('userToken').then(value => {
    if (value !== null) {
      return { token: value }
    }
  })
}
