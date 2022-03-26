import axios, { Prayer, User } from "./axios"

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
  const response = await axios.post<User>(`/prayers`, {
    title,
    description: '',
    checked: false,
    columnId,
  })
  console.log('API POST PRAYER', response.data)
  if (response.data) {
    return response.data
  } else {
    return { error: response.data }
  }
}
