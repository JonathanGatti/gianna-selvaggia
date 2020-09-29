import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/NavbarStyles';

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to='/gianna-selvaggia'>Home</Link>
            <Link className={classes.link} to='gianna-selvaggia/contact'>Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

