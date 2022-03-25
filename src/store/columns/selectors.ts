// export const getDataList = (state: { column: { dataList: ColumnType[] } }) => state.column.dataList

import { Columns } from "../../services/axios"

export const getColumnTitle = (
  state: { columns: Columns[] },
  id: number
): string => {
  return state.columns.filter(column => {
    if (column.id === id) {
      return column
    }

    return undefined
  })[0].title
}
