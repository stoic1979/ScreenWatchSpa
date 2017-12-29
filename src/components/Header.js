import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Loggedin} from "./Loggedin"
import {Loggedout} from "./Loggedout"
import Menu from 'material-ui/svg-icons/navigation/menu';
import Close from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';




import {connect} from 'react-redux';

import {literals} from "../config"


// -----------------------------------------------------------------------
//
//            HEADER COMPONENT
// 
// -----------------------------------------------------------------------
export default class Header extends React.Component {
  


  // ------------------------------------------------
  // render UI
  // ------------------------------------------------
  render() {
    const {loggedIn} = this.props;
    
    //console.log("Header got defs: " + defs.WEBSITE_TITLE );

    //const title = defs.WEBSITE_TITLE;

    return (
         <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                  iconElementLeft={<IconButton><Menu/></IconButton>}
                  iconElementRight={loggedIn ? <Loggedin /> :  <Loggedout />}
                  onLeftIconButtonClick={this.props.onClick}
                />
              </div>
            </MuiThemeProvider>
          </div>
      );
   }
}//Header


function mapStateToProps(state) {
  console.log("--- header got state: " + JSON.stringify(state));

  return state.authentication;
}

const connectedHeaderPage = connect(mapStateToProps)(Header);
export {connectedHeaderPage as Header};