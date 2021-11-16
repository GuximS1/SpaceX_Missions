/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imageSource from "../public/56412099_303.jpg"
import Image from 'next/image'
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  boldness:{
    color:'white'
  }
};

function Home(props) {
  const { classes } = props;
  return (
  <div>
    <h1 className={classes.boldness}>SpaceX Past Launches</h1>
    <Card className={classes.card}>
      <CardActionArea>
      <Image
        alt="Mountains"
        src={imageSource}
        objectFit="cover"
        quality={100}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Falcon 9
          </Typography>
          <Typography component="p">
          On 24 January 2021, Falcon 9 set a new record for the most satellites launched by a single rocket carrying 143 satellites into orbit.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);