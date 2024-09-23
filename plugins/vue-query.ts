import type {
  DehydratedState,
  VueQueryPluginOptions,
} from "@tanstack/vue-query";
import {
  VueQueryPlugin,
  QueryClient,
  hydrate,
  dehydrate,
  QueryCache,
  MutationCache,
} from "@tanstack/vue-query";
// Nuxt 3 app aliases
import { defineNuxtPlugin, useState } from "#imports";

export default defineNuxtPlugin((nuxt) => {
  const vueQueryState = useState<DehydratedState | null>("vue-query");
  // Modify your Vue Query global settings here
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 5000, retry: 2, retryDelay: 2000 },
    },
    queryCache: new QueryCache({
      onError: (reqError) => {
        const errorMsg =
          (reqError.data && reqError.data.message) ||
          reqError.message ||
          '"Произошла ошибка';
        useNuxtApp().$toast.error(
          `${reqError.data && reqError.data.status} - ${errorMsg}`,
          {
            autoClose: 2000,
          }
        );
      },
    }),
    mutationCache: new MutationCache({
      onError: (reqError) => {
        const errorMsg =
          (reqError.data && reqError.data.message) ||
          reqError.message ||
          '"Произошла ошибка';
        useNuxtApp().$toast.error(
          `${reqError.data && reqError.data.status} - ${errorMsg}`,
          {
            autoClose: 2000,
          }
        );
      },
    }),
  });
  const options: VueQueryPluginOptions = { queryClient };

  nuxt.vueApp.use(VueQueryPlugin, options);

  if (import.meta.server) {
    nuxt.hooks.hook("app:rendered", () => {
      vueQueryState.value = dehydrate(queryClient);
    });
  }

  if (import.meta.client) {
    hydrate(queryClient, vueQueryState.value);
  }
});
