import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (name: string, item: string) => {
  try {
    await AsyncStorage.setItem(name, item)
  } catch (error) {
    console.log(error)
  }
}
