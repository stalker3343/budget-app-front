import { Api } from "@/api/generated/budget/Api";
import type { AxiosInstance } from "axios";

export default defineNuxtPlugin((nuxt) => {
  const { $config } = nuxt;

  // Добавляем interceptors
  const setupDefaultInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.response.use(
      function (data) {
        return Promise.resolve(data);
      },
      function (error) {
        return Promise.reject(error.response);
      }
    );

    return instance;
  };

  const generateV1 = () => {
    const api = new Api({
      baseURL: $config.public.BACKEND_URL,
      timeout: 60000,
      headers: {
        "xc-token": $config.public.DB_ACCES_TOKEN,
      },
    });
    setupDefaultInterceptors(api.instance);
    return api;
  };

  return {
    provide: {
      apiService: {
        v1: generateV1(),
      },
    },
  };
});
