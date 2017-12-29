import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {connect} from 'react-redux';
import {userActions} from '../actions';

const styles = {  
  Container: {
      minWidth: 320,
      maxWidth: 400,
      height:'auto',
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
     },
 
  };

//---------------------------------------------------
//
//         LOGIN PAGE
//
//---------------------------------------------------
class LogoutPage extends React.Component {

  // ------------------------------------------------
  // constructor
  // ------------------------------------------------
  constructor(props){
    super(props);

    console.log("handleLogout");
    const {dispatch} = this.props;
    var history = this.props.history;

    dispatch(userActions.logout(history));

    this.state = {     
      
      
    }

   

    
    // this.handleLogout = this.handleLogout.bind(this);
  }

  // ------------------------------------------------
  // handleChange
  

  // ------------------------------------------------
  // handleLogOut
  // ------------------------------------------------
  // handleLogout(e) {

  //   console.log(`-- handleLogout ---`);

  //   e.preventDefault();

  //   const {dispatch} = this.props;
  //   var history = this.props.history;

  //   dispatch(userActions.logout(history));
  // }

  // ------------------------------------------------
  // handleSubmit
  // ------------------------------------------------
 

render() {
  return (
    <div>
      <MuiThemeProvider>
        <form name="form" onSubmit={this.handleSubmit}> 
          <div style={styles.Container}>
          <h3>Log out</h3>
            
          </div>
        </form>
      </MuiThemeProvider>
      </div>
    );
  }//render
}//LogoutPage

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedLogoutPage = connect(mapStateToProps)(LogoutPage);
export {connectedLogoutPage as LogoutPage};