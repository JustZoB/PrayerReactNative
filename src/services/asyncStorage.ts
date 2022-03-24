import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (name: string, item: string) => {
  try {
    await AsyncStorage.setItem(name, item)
  } catch (error) {
    console.log(error)
  }
}

export const getTokenAsyncStorage = async () => {
  try {
    await AsyncStorage.getItem('userToken').then(value => {
      if (value !== null) {
        console.log('Token: ', { token: value })
        return { token: value }
      }
    })
  } catch (error) {
    console.log('Error: ', error)
  }
}
