import axios, { AxiosRequestConfig } from "axios";
import { useQuery as reactUseQuery } from "react-query";

const api = axios.create({
  baseURL: "http://dummy.restapiexample.com/api/",
});

export function useQuery<T = unknown>(
  name: string,
  url: string,
  options?: AxiosRequestConfig
) {
  return reactUseQuery<T | null>(name, async () => {
    const response = await api.get(url, options);
    return response?.data.data;
  });
}
