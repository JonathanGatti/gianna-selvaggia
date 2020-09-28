import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/LampStyles';

function Lamp (props){
    const classes = useStyles();
    const { name, src, price, description, dimension} = props.lamp;
    const { history } = props;

    return ( 
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <div className={classes.image}>
                    <img className={classes.img} 
                    alt={`${name}`} src={require(`./imgs/${src}`)} />
              </div>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className={classes.title} gutterBottom variant="subtitle1">
                    {name}
                  </Typography>
                  <Typography className={classes.description} variant="body2" gutterBottom>
                    {description}
                  </Typography>
                  <Typography className={classes.description} variant="body2" gutterBottom>
                    Dimensions:
                  </Typography>
                  <Typography className={classes.description} variant="body2">
                    Height: {dimension.height}, Length: {dimension.length}, Width: {dimension.width}
                  </Typography>
                </Grid>
                <Grid className={classes.btns} item>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button 
                    variant='contained'
                    color='rgba(255, 255, 255, 0.7)'
                    className={classes.btn}
                    onClick={() => history.goBack()}>
                    Go Back
                  </Button>
                  </Typography>
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button component={ Link } 
                          variant='contained'
                          to='/contact' 
                          className={classes.btn} >
                    Contact Us
                  </Button>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className={classes.price} variant="subtitle1">{price}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div> 
    )
}

export default withRouter(Lamp);