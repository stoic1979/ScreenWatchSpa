import React, { Component } from 'react';
import './App.css';
import {Header} from "./components/Header"
import Drawer from 'material-ui/Drawer';
import Footer from "./components/Footer"
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';



import {Routes} from './routes'


import {connect} from 'react-redux';

import {literals} from "./config"


// -----------------------------------------------------------------------
//
//            APP
// 
// -----------------------------------------------------------------------
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handle = () =>console.log("you are not logged in");
  

    // ------------------------------------------------
    // render UI
    // ------------------------------------------------
    render() {
      const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
      const {loggedIn} = this.props;
      var {user}      = this.props;
      if(user){
        var role=user.role;
      }
      
      console.log('user logged in ' +JSON.stringify(loggedIn));
      console.log('user in App '+JSON.stringify(user));
      console.log('role in app '+role);
      if (this.state.open) {
        contentStyle.marginLeft = 245;
      }
      return (
         <div style={contentStyle}>
          <MuiThemeProvider>
            <Header 
            onClick={loggedIn ? this.handleToggle : this.handle}
            />
            <Drawer width={245} open={this.state.open}>  
              <AppBar title="SCREEN  WATCH" showMenuIconButton={false}/>
              
              
            </Drawer>
            <hr />
            <Routes/>
            <Footer />
          </MuiThemeProvider>
        </div>

      );//return

    }//render

}//App

function mapStateToProps(state) {
   const {alert} = state;
    return state.authentication;
  
  
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};