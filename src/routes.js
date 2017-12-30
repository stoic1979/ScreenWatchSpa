import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {HomePage} from "./containers/HomePage"
import {AboutUsPage} from "./containers/AboutUsPage"
import {ContactUsPage} from "./containers/ContactUsPage"
import {LoginPage} from "./containers/LoginPage"
import {LogoutPage} from "./containers/LogoutPage"
import {RegisterPage} from "./containers/RegisterPage"
import {PricingPage} from "./containers/PricingPage"
import {NotFoundPage} from "./containers/NotFoundPage"
import {UserListPage} from "./containers/UserListPage"
import {FileUploadPage} from "./containers/FileUploadPage"


import {connect} from 'react-redux';


class Routes extends Component {
   render() {
      return (
         <Router>
            <div>
              <Switch>
                  <Route exact path='/'              component={HomePage} />
                  <Route exact path='/aboutUs'       component={AboutUsPage} />
                  <Route exact path='/contactUs'     component={ContactUsPage} />
                  <Route exact path='/login'         component={LoginPage} />
                  <Route exact path='/logout'        component={LogoutPage} />
                  <Route exact path='/register'      component={RegisterPage} />
                  <Route exact path='/pricing'       component={PricingPage} /> 
                  <Route exact path='/users'         component={UserListPage} /> 
                  <Route exact path='/fileUpload'         component={FileUploadPage} />  
                 
                  <Route path='*'                    component={NotFoundPage} />                   
              </Switch>
            </div>
         </Router>
      );
   }
}//Routes


function mapStateToProps(state) {
  // const {alert, loggedIn} = state;
  // return {
  //   alert, loggedIn
  // };
}

const connectedRoutes = connect(mapStateToProps)(Routes);
export {connectedRoutes as Routes};