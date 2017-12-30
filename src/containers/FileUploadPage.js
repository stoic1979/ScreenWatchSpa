import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Dropzone from 'react-dropzone';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import {connect} from 'react-redux';
import {screenshotActions} from '../actions';




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
  sbt:{
    marginLeft:'20%',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

//---------------------------------------------------
//
//         LOGIN PAGE
//
//---------------------------------------------------
class FileUploadPage extends React.Component {

  // ------------------------------------------------
  // constructor
  // ------------------------------------------------
  constructor(props){
    super(props);
    this.state={
      sampleFile:[],
      submitted:false,
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


   // ------------------------------------------------
  // handleChange
  // ------------------------------------------------
  handleChange(e) {
    console.log(`-- handleChange, target: ${e.target.name}`);

    const {name, value} = e.target;
    this.setState({[name]: value});
  }
// ------------------------------------------------
  // handleSubmit
  // ------------------------------------------------
  handleSubmit(e) {
    e.preventDefault();

    console.log('-- handleSubmit --');

    this.setState({submitted: true});
    const {sampleFile} = this.state;
    const {dispatch} = this.props;
    var history = this.props.history;
    
    console.log("dispatching screenshot action");
    dispatch(screenshotActions.create(sampleFile));
   
 
     }
  
render() {
  const {sampleFile}=this.state;
return (
    <div>
      <MuiThemeProvider>
        <center>{this.props.alert && this.props.alert.message}</center>
        <form name="form" onSubmit={this.handleSubmit}> 
          <div style={styles.Container}>
          <h3>File Upload</h3>
            <br/><br/>
            <input type="file" name="sampleFile" value={sampleFile} onChange={this.handleChange} /><br/><br/>
            <RaisedButton label="Upload" style={styles.sbt} primary={true} type="submit"/>
          </div>
        </form>
      </MuiThemeProvider>
      </div>
    );
  }//render
}//FileUploadPage



function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedFileUploadPage = connect(mapStateToProps)(FileUploadPage);
export {connectedFileUploadPage as FileUploadPage};