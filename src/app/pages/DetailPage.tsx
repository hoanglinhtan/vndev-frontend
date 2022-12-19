import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useFilmDetail } from './useFilmDetail';
import parse from 'html-react-parser';

export function DetailPage() {
  const { data } = useFilmDetail();

  return (
    <Card
      style={{ overflow: 'scroll' }}
      sx={{ width: '100%', height: '100vh' }}
    >
      <CardContent>{parse(data || '')}</CardContent>
    </Card>
  );
}

export default DetailPage;
