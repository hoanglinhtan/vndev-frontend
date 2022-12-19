import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FilmCard(props: {
  title: string;
  logo: string;
  shortDesc: string;
  onClick: () => void;
}) {
  const { title, logo, shortDesc, onClick } = props;
  return (
    <Card onClick={onClick} sx={{ width: '100%', margin: '10px' }}>
      <CardMedia component="img" height="140" image={logo} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {shortDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
