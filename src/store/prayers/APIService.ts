import axios, { Prayer, PrayerPost } from "../../services/axios"

export const getPrayers = async () => {
  const response = await axios.get<Prayer[]>(`/prayers`)

  if (response.data) {
    return { prayers: response.data }
  } else {
    return { error: response.data }
  }
}

export const postPrayer = async (title: string, columnId: number) => {
  const response = await axios.post<PrayerPost>(`/prayers`, {
    title,
    description: '',
    checked: false,
    columnId,
  })

  if (response.data) {
    return {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      checked: response.data.checked,
      columnId: response.data.column.id,
      commentsIds: response.data.commentsIds,
    }
  } else {
    return { error: response.data }
  }
}

export const checkPrayer = async (id: number, checked: boolean) => {
  const response = await axios.put<Prayer>(`/prayers/${id}`, {
    checked: checked,
  })

  if (response.data) {
    return {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      checked: response.data.checked,
      columnId: response.data.columnId,
      commentsIds: response.data.commentsIds,
    }
  } else {
    return { error: response.data }
  }
}

export const deletePrayer = async (id: number) => {
  const response = await axios.delete(`/prayers/${id}`)

  if (response.data) {
    return response.data
  } else {
    return { error: response.data }
  }
}
