import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

  return (
    <div>
    {data.map(data =>(
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.course}
          {data.main}
            {data.technique}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </div>
  );
}