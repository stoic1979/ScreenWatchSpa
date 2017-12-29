import React, {PropTypes} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import People from 'material-ui/svg-icons/social/person';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import Home from 'material-ui/svg-icons/action/home';
import Paper from 'material-ui/Paper';



const styles = {
  footer: {
    fontWeight: 500,
    fontSize: '1.0em',
    position:'fixed',
    left:0,
    bottom:0,
    right:0,
    
    },
  btn:{
    color:'white',
  },
  paper:{
    backgroundColor:'black',
    color:'white',
  },
 
};
const Footer = (props) => {
  return (
    <div style={styles.footer}>
    <Paper style={styles.paper}>
      <Row center="xs">
        <Col xs={true}>
          <span style={styles.span}>© 2017 Screen Watch  </span>
          <FlatButton
            label="About Us"
            labelPosition="before"
            style={styles.btn}
            href="/aboutUs"
          />
          <FlatButton
            label="Contact Us"
            labelPosition="before"
            style={styles.btn}
            href="/contactUs"
          />
        
        </Col>

      </Row>
    </Paper>

    </div>
  );
};

export default Footer;
