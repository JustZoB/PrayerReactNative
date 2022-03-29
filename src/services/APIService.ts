import axios, { Prayer, PrayerPost, User, Comment, Columns } from "./axios"

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

export const postColumn = async (title: string) => {
  const response = await axios.post<Columns>(`/columns`, {
    title,
  })
  console.log('API POST COLUMN', response.data)

  if (response.data) {
    return {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      userId: response.data.userId,
    }
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

export const comments = async () => {
  const response = await axios.get<Comment[]>(`/comments`)
  console.log('API COMMENTS', response.data)
  if (response.data) {
    return { comments: response.data }
  } else {
    return { error: response.data }
  }
}

export const postComment = async (body: string, prayerId: number) => {
  const response = await axios.post<Comment>(`/comments`, {
    body,
    prayerId,
    created: new Date,
  })
  console.log('API POST COMMENT', response.data)

  if (response.data) {
    return {
      id: response.data.id,
      body: response.data.body,
      created: response.data.created,
      prayerId: response.data.prayerId,
      userId: response.data.userId,
    }
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

export const checkPrayer = async (id: number, checked: boolean) => {
  const response = await axios.put<Prayer>(`/prayers/${id}`, {
    checked: checked,
  })
  console.log('API PUT PRAYER', response.data)

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
