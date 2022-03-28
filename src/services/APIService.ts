import axios, { Prayer, PrayerPost, User } from "./axios"

export const logIn = async (email: string, password: string) => {
  const response = await axios.post<User>(`/auth/sign-in`, {
    email,
    password,
  })
  if (response.data.token) {
    return { user: response.data }
  } else {
    return { error: response.data }
  }
}

export const register = async (email: string, name: string, password: string) => {
  const response = await axios.post<User>(`/auth/sign-up`, {
    email,
    name,
    password,
  })
  if (response.data.token) {
    return { user: response.data }
  } else {
    return { error: response.data }
  }
}

export const columns = async () => {
  const response = await axios.get<User>(`/columns`)
  if (response.data) {
    return { columns: response.data }
  } else {
    return { error: response.data }
  }
}

export const prayers = async () => {
  const response = await axios.get<Prayer[]>(`/prayers`)
  console.log('API PRAYER', response.data)
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
  console.log('API POST PRAYER', response.data)

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

export const checkPrayer = async (prayer: Prayer) => {
  const response = await axios.put<PrayerPost>(`/prayers`, {
    id: prayer.id,
    title: prayer.title,
    description: prayer.description,
    checked: !prayer.description,
    columnId: prayer.columnId,
  })
  console.log('API PUT PRAYER', response.data)

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
