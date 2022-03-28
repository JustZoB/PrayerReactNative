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

export const getPrayersByColumnId = (
  state: { prayers: Prayer[] },
  columnId: number,
): Prayer[] => {
  return state.prayers.filter(prayer => {
    if (prayer.columnId === columnId) {
      return prayer
    }

    return undefined
  })
}

export const getPrayerChecked = (
  state: { prayers: Prayer[] },
  id: number
): boolean => {
  return state.prayers.filter(prayer => {
    if (prayer.id === id) {
      return prayer
    }

    return undefined
  })[0].checked
}
