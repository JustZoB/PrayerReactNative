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

export const getCommentUser = (
  state: { comments: Comment[] },
  id: number
): number => {
  return state.comments.filter(column => {
    if (column.id === id) {
      return column
    }

    return undefined
  })[0].userId
}

export const getCommentDate = (
  state: { comments: Comment[] },
  id: number
): string => {
  return state.comments.filter(column => {
    if (column.id === id) {
      return column
    }

    return undefined
  })[0].created
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

export const getDateString = (
  date: string
): string => {
  const now = new Date
  const subDate = now.valueOf() - Date.parse(date).valueOf();
  let stringDate = ''

  if ((subDate / 1000 / 60) < 1) {
    stringDate = `${Math.round(subDate / 1000)} seconds ago`
  } else if ((subDate / 1000 / 60 / 60) < 1) {
    stringDate = `${Math.round(subDate / 1000 / 60)} minutes ago`
  } else if ((subDate / 1000 / 60 / 60 / 24) < 1) {
    stringDate = `${Math.round(subDate / 1000 / 60 / 60)} hours ago`
  } else if ((subDate / 1000 / 60 / 60 / 24 / 30) < 1) {
    stringDate = `${Math.round(subDate / 1000 / 60 / 60 / 24)} days ago`
  } else if ((subDate / 1000 / 60 / 60 / 24 / 30 / 12) < 1) {
    stringDate = `${Math.round(subDate / 1000 / 60 / 60 / 24 / 30)} mounths ago`
  } else {
    stringDate = `${Math.round(subDate / 1000 / 60 / 60 / 24 / 30 / 12)} years ago`
  }

  return stringDate
}
