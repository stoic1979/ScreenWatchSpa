import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import {connect} from 'react-redux';


const styles = {  
  mybtn: {
      color: 'white'
     }
  };


class Loggedin extends React.Component {
  static muiName = 'FlatButton';

    // ------------------------------------------------
    // render UI
    // ------------------------------------------------
    render() {
    return (
      <div>
        <FlatButton style={styles.mybtn} label="HOME"  href="/" />
        <FlatButton style={styles.mybtn} label="LOGOUT"  href="/logout" />
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

const connectedLoggedin = connect(mapStateToProps)(Loggedin);
export {connectedLoggedin as Loggedin};



