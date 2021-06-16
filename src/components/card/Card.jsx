import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
import log from '../../utils/logger'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  content : {
    height :250
  }
});

export default function MediaCard(props) {

  let history = useHistory();
  const classes = useStyles();
  const displayDetails = () => {
    //redirecting
    if(props.type==="author")
    history.push('/author/'+props.id);
    else
    if(props.type==="book")
    history.push('/book/'+props.isbn);
  }
  return (
    <Card className={props.className}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.summary.substr(1,100)+"..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={displayDetails}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}