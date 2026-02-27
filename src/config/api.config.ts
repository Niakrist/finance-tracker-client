export const SERVER_URL = import.meta.env.SERVER_URL

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,
  auth: (url = '') => API_URL.root(`/auth${url}`)
}
