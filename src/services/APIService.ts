import axios, { User } from "./axios"

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
