import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/LampListStyles'

export default function LampList(props) {
  const classes = useStyles();
  const { type } = props.match.params;

    const getType = (type) =>{
      const lampType = props.lamps.filter(lamp =>
        lamp.type === type
      )
      return lampType
    }
    const getTitle = (type) => {
      const lampType = getType(type)[0].type;
      if(lampType === 'clocks') return 'The Time Colletion'
      else if(lampType === 'ceiling') return 'Chandeliers'
      else if(lampType === 'table') return 'Table Lamps'
    }
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>{getTitle(type)}</h1>
        <Grid container spacing={3}>
          {getType(type).map(lamp => (
            <Grid item md={6} lg={4} xl={3}>
              <Card className={classes.root}>
                <CardMedia  
                  className={classes.media}>
                  <img className={classes.img} 
                      src={require(`./imgs/${lamp.src}`)} alt='lamp' />
                </CardMedia>
                <Link 
                    gutterBottom 
                    className={classes.link} 
                    to={`/lamps/${lamp.type}/${lamp.name}`}>
                  <CardActionArea>
                      <CardContent className={classes.card}>
                        <Typography gutterBottom variant="h5" component="h4">
                          {lamp.name}
                        </Typography>
                        <Typography 
                          color="rgba(255, 255, 255, 0.7)" 
                          component="p">
                          {lamp.description}
                        </Typography>
                      </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button component={ Link } 
                variant='contained'
                color='default' to='/' 
                className={classes.link} >
                    Go Back
        </Button>
    </div>
  );
}
