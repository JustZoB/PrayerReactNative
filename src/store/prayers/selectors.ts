import { Prayer } from "../../services/axios"

export const getPrayerTitle = (
  state: { prayers: Prayer[] },
  id: number
): string => {
  if (state.prayers !== undefined) {
    return state.prayers.filter(prayer => {
      if (prayer.id === id) {
        return prayer
      }

      return undefined
    })[0].title
  }
}

export const getPrayerById = (
  state: { prayers: Prayer[] },
  id: number,
): Prayer => {
  if (state.prayers !== undefined) {
    return state.prayers.filter(prayer => {
      if (prayer.id === id) {
        return prayer
      }

      return undefined
    })[0]
  }
}

export const getPrayersByColumnId = (
  state: { prayers: Prayer[] },
  columnId: number,
): Prayer[] => {
  if (state.prayers !== undefined) {
    return state.prayers.filter(prayer => {
      if (prayer.columnId === columnId) {
        return prayer
      }

      return undefined
    })
  }
}

export const getPrayersChecked = (
  state: Prayer[]
): Prayer[] => {
  if (state !== undefined) {
    return state.filter(prayer => {
      if (prayer.checked) {
        return prayer
      }

      return undefined
    })
  }
}

export const getPrayersUnChecked = (
  state: Prayer[]
): Prayer[] => {
  if (state !== undefined) {
    return state.filter(prayer => {
      if (!prayer.checked) {
        return prayer
      }

      return undefined
    })
  }
}

export const getPrayerChecked = (
  state: { prayers: Prayer[] },
  id: number
): boolean => {
  if (state.prayers !== undefined) {
    return state.prayers.filter(prayer => {
      if (prayer.id === id) {
        return prayer
      }

      return undefined
    })[0].checked
  }
}
