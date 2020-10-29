import React from 'react';
import useStyles from './styles/ContactPageStyles';

export default function ContactPage(){
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>Get In Touch</h1>
      <p>For more informations about the products and shipping cost please contact us at:</p>
      <span>Email: jayneselvaggio@gmail.com</span>
      <span>Phone: +44 7801 697362</span>
    </div>
  )
}