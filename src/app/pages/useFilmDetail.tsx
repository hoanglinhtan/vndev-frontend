import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import mock from '../mock/blockbusterapp';

export const useFilmDetail = () => {
  const params = useParams();

  const data = mock.films.find(
    (v) => v.id === Number(Object.values(params)[0])
  )?.descHtml;

  return useMemo(
    () => ({
      data,
    }),
    [data]
  );
};
