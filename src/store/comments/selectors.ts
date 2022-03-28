// export const getDataList = (state: { column: { dataList: ColumnType[] } }) => state.column.dataList

import { Comment } from "../../services/axios"

export const getCommentBody = (
  state: { comments: Comment[] },
  id: number
): string => {
  return state.comments.filter(column => {
    if (column.id === id) {
      return column
    }

    return undefined
  })[0].body
}

export const getCommentsByPrayerId = (
  state: { comments: Comment[] },
  prayerId: number,
): Comment[] => {
  if (state.comments !== undefined) {
    return state.comments.filter(comment => {
      if (comment.prayerId === prayerId) {
        return comment
      }

      return undefined
    })
  }
}
