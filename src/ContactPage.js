import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1.3rem',
    justifyContent: 'space-between'
  },
}))

export default function ContactPage(){
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Get In Touch</h1>
      <p>For informations about the products and shipping cost please contact us at:</p>
      <span>Email: jayneselvaggio@gmail.com</span>
      <span>Phone: +44 7801 697362</span>
    </div>
  )
}