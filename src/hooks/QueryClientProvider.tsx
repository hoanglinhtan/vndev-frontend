import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { QueryClientProviderProps } from 'react-query';

const client = new QueryClient();

export default (
  props: Omit<QueryClientProviderProps, 'client'>
): JSX.Element => <QueryClientProvider {...{ ...props, client }} />;
