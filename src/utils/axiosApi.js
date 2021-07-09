import axios from "axios";

const apiUrl = 'http://206.189.91.54//api/v1/'
const config = {
  headers: {
    'access-token': 'haXWCLr264GN4T2F5qSSug',
    'client': '_690jUPp79Ik24mMmKlQJA',
    'expiry': '1626789364',
    'uid': 'user1@example.com'
  },
};

export const get = (url) => {
  const res = axios.get(`${apiUrl}/${url}`, {})
  return res
}

export const getWithToken = (url) => {
  const res = axios.get(`${apiUrl}/${url}`, { headers: config.headers })
  return res
}

export const post = (url, data = {}) => {
  const res = axios.post(`${apiUrl}/${url}`, data, {
    // headers: config.headers
  })
  return res
}

export const postWithToken = (url, data = {}) => {
  const res = axios.post(`${apiUrl}/${url}`, data, {
    headers: config.headers
  })

  return res
}
