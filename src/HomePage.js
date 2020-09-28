import React from 'react';
import {Link} from 'react-router-dom';
import useStyles from './styles/HomePageStyles'

function  HomePage() {
  const classes = useStyles();

    return(
      <div className={classes.root}>
          <div className={classes.headerContainer}>
            <div className={classes.headerText}>
              <h1 className={classes.title}>Gianna Selvaggia</h1>
                <p className={classes.intro}>I LIKE TO RECYCLE BECAUSE MORE OR 
                  LESS ANYTHING CAN BE RECYCLED. IT IS 
                  TIME TO BE AWARE OF HOW TO CONTRIBUTE TO RECYCLING  
                  AND ENLIGHTEN THE WORLD THROUGHOUT THE USE OF SALVAGED MATERIALS, 
                  BRINGING BACK THE BALANCE BETWEEN DARKNESS AND LIGHT
                </p>
            </div>
              <img 
                src={require('./imgs/home/homepage.jpg')} alt='homepage'/>
          </div>
        <div>
          <h2 className={classes.h2}>Discover The Catalogue</h2>
        </div>
        <div className={classes.linksContainer}>
          <div className={classes.link} >
            <Link to='/lamps/ceiling'>
              <p>Chandeliers</p>
            <img 
              style={{width: '300px', height: '300px', borderRadius: '5px'}}
              src={require('./imgs/lucrezia.jpg')} 
              alt='chandelier link'/>
            </Link>
          </div>
          <div className={classes.link}>
            <Link to='/lamps/table'>
              <p>Table Lamps</p>
            <img 
              style={{width: '300px', height: '300px', borderRadius: '5px'}}
              src={require('./imgs/krea.jpg')} 
              alt='table lamps link'/>
            </Link>
          </div>
          <div className={classes.link}>
            <Link to='/lamps/clocks'>
              <p>The Time Collection</p>
            <img 
              style={{width: '300px', height: '300px', borderRadius: '5px'}}
              src={require('./imgs/moon.jpg')} 
              alt='clocks link'/>
            </Link>
          </div>
        </div>
      </div>
    )
}


export default HomePage;