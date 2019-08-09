import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const add = (numOne = 0, numTwo = 0) => {
    return numOne + numTwo;
};

export default function MediaCard() {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
      Axios.get(`http://localhost:5000/api/restricted/data`)
      .then(res => setData(res.data))
      }, [])
  console.log('coming from card.js', data)

    var res = data.map(dish => ({ value: dish.id, name: dish.name }));
  console.log(res)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {data[0].} */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}