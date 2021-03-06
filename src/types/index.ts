export type Methods = 'GET' | 'get' | 'POST' | 'post' | 'PUT' | 'put' | 'DELETE' | 'delete'

export interface AxiosRequestConfig {
  url: string
  method?: Methods
  params?: any
  data?: any
}
