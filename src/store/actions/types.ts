export interface UserModel {
  id: number;
  email: string;
  name: string;
  token: string
}

export interface LoginAction {
  readonly type: 'ON_LOGIN';
  payload: UserModel
}

export interface ErrorAction {
  readonly type: 'ON_ERROR';
  payload: any
}
