import axios, { Comment } from "../../services/axios"

export const getComments = async () => {
  const response = await axios.get<Comment[]>(`/comments`)

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
