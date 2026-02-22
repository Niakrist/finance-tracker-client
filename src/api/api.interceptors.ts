import { SERVER_URL } from '@/config'
import type { CreateAxiosDefaults } from 'axios'
import { getContentType } from './api.helpers'
import axios from 'axios'

// withCredentials: true - настройка, которая позволяет включать передачу учетных данных при выполнении CORS запросов.
const options: CreateAxiosDefaults = {
  baseURL: SERVER_URL,
  headers: getContentType(),
  withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = getAccessToken()
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})
