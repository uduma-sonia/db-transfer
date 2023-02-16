import axios from 'axios'
// import userService from './user'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL
const isBrowser = typeof window !== undefined

export const api = axios.create({
  baseURL: API_ENDPOINT,
})

api.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    const { response } = error
    let message = 'An unexpected error occurred'

    if (response) {
      if (response.data) {
        message = response.data.message

        return Promise.reject(message)
      }
      return Promise.reject(message)
    }
    return Promise.reject(message)
  }
)

const addTokenToRequest = async (request: any) => {
  if (!isBrowser || request.headers.Authorization) return request

  request.headers.Authorization = `Bearer`
  return request
}

api.interceptors.request.use(addTokenToRequest)

// export const userApi = userService({ api })