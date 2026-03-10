export const SERVER_URL = import.meta.env.VITE_SERVER_URL

console.log('SERVER_URL: ', SERVER_URL) // undefined

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,
  auth: (url = '') => API_URL.root(`/auth${url}`),
  categories: (url = '') => API_URL.root(`/categories${url}`)
}
