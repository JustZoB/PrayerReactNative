export interface ColumnRouteType {
  key: string,
  name: string,
  params: {
    id: number,
  },
  path: Object | undefined,
}

export interface PrayerRouteType {
  params: { id: number },
}
