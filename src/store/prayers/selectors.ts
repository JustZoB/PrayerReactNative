import { Prayer } from "../../services/axios"

export const getPrayerTitle = (
  state: { prayers: Prayer[] },
  id: number
): string => {
  return state.prayers.filter(prayer => {
    if (prayer.id === id) {
      return prayer
    }

    return undefined
  })[0].title
}
