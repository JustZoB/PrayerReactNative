import axios from 'axios';

const instance = axios.create({ baseURL: 'https://prayer.herokuapp.com/' });

export default instance
