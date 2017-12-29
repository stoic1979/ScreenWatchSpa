import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import {connect} from 'react-redux';

const styles = {  
  mybtn: {
      color: 'white'
     }
  };

class Loggedout extends React.Component {
  static muiName = 'FlatButton';
  constructor(props){
    super(props); 
    
    this.state = {     
     
    }
  }

  render() {
    return (
      <div>
        <FlatButton  style={styles.mybtn}  label="Login" href='/login' />
        <FlatButton   style={styles.mybtn} label="Regiter" href="/register" />
      </div>
    );
  }
}




function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedLoggedout = connect(mapStateToProps)(Loggedout);
export {connectedLoggedout as Loggedout};