import React from 'react';
import { connect } from 'react-redux';
import {Container,Col,Row} from 'react-grid-system';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Phone from 'material-ui/svg-icons/communication/contact-phone';
import Email from 'material-ui/svg-icons/communication/email';
import Location from 'material-ui/svg-icons/communication/location-on';



import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



// import {projectActions} from '../actions';

// import {store} from '../store';
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const styles={
  
   Container: {
      minWidth: 320,
      maxWidth: 850,
      height:'auto',
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
      marginBottom:40,
      marginTop: 60,
     },
    add:{
      color:'gray',
    },
    sbt:{
    marginLeft:'40%',
    },
};

class ContactUsPage extends React.Component {
   // ------------------------------------------------
  // constructor
  // ------------------------------------------------
  constructor(props){
    super(props);

    this.state = {     
      name:'',
      email:'',
      subject:'',
      message:'',
     
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
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
    console.log(this.state);
    console.log('-- create issue handleSubmit --');

    this.setState({submitted: true});
    
  }

    render() {
     
     console.log("props: " +this.props);
     const {name,email,subject,message} =this.state;

      return (
        <MuiThemeProvider>
          <div style={styles.Container}>
            CONTACT US
            <Container>
              <Row>
              <Col sm={6}>
                <TextField
                  hintText="Name"
                  floatingLabelText="Name"
                  name="name"
                  value={name}
                  onChange={this.handleChange} 
                />
                <TextField
                  hintText="Email"
                  floatingLabelText="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange} 
                />
                <TextField
                  hintText="Subject"
                  floatingLabelText="Subject"
                  name="subject"
                  value={subject}
                  onChange={this.handleChange} 
                />
                
              </Col>
              <Col sm={6}>
                <TextField
                  hintText="Message"
                  floatingLabelText="Message"
                  multiLine={true}
                  rows={3}
                  rowsMax={6}
                  name="message"
                  value={message}
                  onChange={this.handleChange} 
                />
                <br/><br/>
                <div style={styles.add}>
                   Phone : - 0160-5004037 
                  <br/><br/>
                  Email : - weavebytes@gmail.com
                  <br/><br/>
                    Address : - SCO 81, 2nd Floor, City Heart, Opposite Bank Square, Kharar-Chandigarh Road, Kharar, 
                                Mohali, Punjab,India --140301
                </div>
                </Col>
            </Row>
          </Container>
          <br/><br/><br/>
          <RaisedButton style={styles.sbt} label="Submit" primary={true} type="submit"/>
        </div>
      </MuiThemeProvider>
      );
    }
    }


function mapStateToProps(state) {
  return state;

  //return {
    //studies: state.studies
  //};
}
 
const connectedContactUsPage = connect(mapStateToProps)(ContactUsPage);
export { connectedContactUsPage as ContactUsPage };
