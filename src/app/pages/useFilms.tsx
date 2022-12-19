import { useMemo } from 'react';
import mock from '../mock/blockbusterapp';

export interface UsePlansFromGroupResponse {
  data?: any;
}

export const useFilms = (): UsePlansFromGroupResponse => {
  const data = mock;

  return useMemo(
    () => ({
      data,
    }),
    [data]
  );
};
