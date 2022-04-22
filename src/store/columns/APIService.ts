import axios, { Column } from "../../services/axios"

export const getColumns = async () => {
  const response = await axios.get<Column[]>(`/columns`)
  if (response.data) {
    return { columns: response.data }
  } else {
    return { error: response.data }
  }
}

export const postColumn = async (title: string) => {
  const response = await axios.post<Column>(`/columns`, {
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
