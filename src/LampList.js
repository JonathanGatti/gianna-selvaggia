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
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  media: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  img: {
    maxHeight: '300px',
    maxWidth: '100%',
    objectFit: 'cover'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
    <div className={classes.root}>
      <Grid container spacing={3}>
        {getType(type).map(lamp => (
          <Grid item xs={6} md={2}>
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
                <Button size="small" color="primary">
                  Share
                </Button>
                <Link className='Lamp-title'
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
