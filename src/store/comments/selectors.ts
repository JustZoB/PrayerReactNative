import { Comment } from "../../services/axios"

export const getComment = (
  state: { comments: Comment[] },
  id: number
): Comment => {
  if (state.comments !== undefined) {
    return state.comments.filter(comment => {
      if (comment.id === id) {
        return comment
      }

      return undefined
    })[0]
  }
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
