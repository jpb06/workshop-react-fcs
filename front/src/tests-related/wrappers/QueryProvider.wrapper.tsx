import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
    mutations: {
      retry: false,
    },
  },
});

interface QueryProviderWrapperResult {
  wrapper: ({ children }) => JSX.Element;
  queryClient: QueryClient;
}

export const QueryProviderWrapper = (): QueryProviderWrapperResult => {
  const wrapper = ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  return { wrapper, queryClient };
};
