import axios from 'axios';

const instance = axios.create({ baseURL: 'https://prayer.herokuapp.com/' });

export interface SignIn {
  email: string,
  password: string,
}

export interface SignUp {
  email: string,
  name: string,
  password: string,
}

export interface User {
  id?: number,
  email?: string,
  name?: string,
  token: string,
}

export interface Columns {
  id: number,
  title: string,
  description: string,
  userId: number,
}

export interface Prayer {
  id: number,
  title: string,
  description: string,
  checked: boolean,
  columnId: number,
  commentsIds: string[],
}

export interface Comments {
  id: number,
  body: string,
  created: string,
  prayerId: number,
  userId: number,
}

export default instance
