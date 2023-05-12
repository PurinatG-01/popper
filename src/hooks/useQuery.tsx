import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export interface ApiResponse<T> {
  status: string
  data: T
}

const API_URL = "https://gin-main-swbyfznsjq-de.a.run.app/"

interface UseQueryState {
  get: <T>(
    path: string,
    options?: AxiosRequestConfig<any> | undefined
  ) => Promise<AxiosResponse<ApiResponse<T>, any>>
  post: <T>(
    path: string,
    options?: AxiosRequestConfig<any> | undefined
  ) => Promise<AxiosResponse<ApiResponse<T>, any>>
}

export default function useQuery(): UseQueryState {
  return {
    get,
    post,
  }
}

async function get<T>(
  path: string,
  options?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<ApiResponse<T>, any>> {
    const url = `${API_URL}/${path}`
  return axios.get<ApiResponse<T>>(path, options ?? undefined)
}

async function post<T>(
  path: string,
  options?: AxiosRequestConfig<any> | undefined
): Promise<AxiosResponse<ApiResponse<T>, any>> {
    const url = `${API_URL}/${path}`
  return axios.get<ApiResponse<T>>(path, options ?? undefined)
}
