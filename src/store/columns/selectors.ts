import { Column } from "../../services/axios"

export const getColumnTitle = (
  state: { columns: Column[] },
  id: number
): string => {
  return state.columns.filter(column => {
    if (column.id === id) {
      return column
    }

    return undefined
  })[0].title
}
