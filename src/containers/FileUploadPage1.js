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


var request = require('superagent');
var apiBaseUrl = "http://0.0.0.0:8081/screenShots/file_upload";

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
      filesPreview:[],
      filesToBeSent:[],
      
      printcount:10,
    }
  }

  handleClick(event){
  // console.log("handleClick",event);
  var self = this;
  if(this.state.filesToBeSent.length>0){
    var filesArray = this.state.filesToBeSent;
    console.log("filesArray" +JSON.stringify(filesArray));
    var req = request.post(apiBaseUrl);
    for(var i in filesArray){
        // console.log("files",filesArray[i][0]);
        req.attach(filesArray[i][0].name,filesArray[i][0])
    }
    req.end(function(err,res){
      if(err){
        console.log("error ocurred");
      }
      console.log("res",res);
      alert("File printing completed")
    });
  }
  else{
    alert("Please upload some files first");
  }
}
  onDrop(acceptedFiles, rejectedFiles) {
      // console.log('Accepted files: ', acceptedFiles[0].name);
      var filesToBeSent=this.state.filesToBeSent;
      if(filesToBeSent.length < this.state.printcount){
        filesToBeSent.push(acceptedFiles);
        var filesPreview=[];
        for(var i in filesToBeSent){
          filesPreview.push(<div>
            {filesToBeSent[i][0].name}
            <MuiThemeProvider>
            <a href="#"><FontIcon
              className="material-icons customstyle"
              color={blue500}
              styles={{ top:10,}}
            >clear</FontIcon></a>
            </MuiThemeProvider>
            </div>
          )
        }
        this.setState({filesToBeSent,filesPreview});
      }
      else{
        alert("You have reached the limit of printing files at a time")
      }
   }
 render() {
    return (
      <div className="App">
      
          <center>
          <div>
            You can upload upto {this.state.printcount} files at a time.
          </div>
          <Dropzone onDrop={(files) => this.onDrop(files)}>
                <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          <div>
          Files to be printed are:
          {this.state.filesPreview}
          </div>
          </center>
          <div>
          {this.state.printingmessage}
          </div>
          <MuiThemeProvider>
            <RaisedButton label="Print Files" primary={true}  onClick={(event) => this.handleClick(event)}/>
          </MuiThemeProvider>
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

const connectedFileUploadPage = connect(mapStateToProps)(FileUploadPage);
export {connectedFileUploadPage as FileUploadPage};