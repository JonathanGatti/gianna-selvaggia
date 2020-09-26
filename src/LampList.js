import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexBasis: '25%',
  },
  root: {
    flexGrow: 1,
    margin: '3rem',
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '300px',
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  img: {
    width: '300px',
    height: '300px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    marginLeft: '0.35em',
    fontSize: '1.5em'
  }
}));

export default function LampList(props) {
  const classes = useStyles();
  const { type } = props.match.params;

    const getType = (type) =>{
      const lampType = props.lamps.filter(lamp =>
        lamp.type === type
      )
      return lampType
    }
  return (
    <div className={classes.container}>
        <Grid container spacing={3}>
          {getType(type).map(lamp => (
            <Grid item md={6} lg={4} xl={3}>
              <Card className={classes.root}>
                <CardMedia  
                  className={classes.media}>
                  <img className={classes.img} 
                      src={require(`./imgs/${lamp.src}`)} alt='lamp' />
                </CardMedia>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {lamp.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {lamp.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link className={classes.link}
                        to={`/lamps/${lamp.type}/${lamp.name}`} >
                        Discover More
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}
