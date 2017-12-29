import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Container,Col,Row} from 'react-grid-system';
import {connect} from 'react-redux';
import {userActions} from '../actions';


const styles = {
  
  Container: {
      minWidth: 320,
      maxWidth: 800,
      height:'auto',
      position: 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
     },
      sbt:{
      marginLeft:'40%',
     },
  };


//---------------------------------------------------
//
//         REGISTER PAGE
//
//---------------------------------------------------

class RegisterPage extends React.Component {

  // ------------------------------------------------
  // constructor
  // ------------------------------------------------
constructor(props){
  super(props);

 this.state = {
            
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            user_name:'',

            submitted: false
        };
 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  // ------------------------------------------------
  // handleChange
  // ------------------------------------------------
  // ------------------------------------------------
  handleChange(e) {
    console.log(`-- handleChange, target: ${e.target.name}`);

    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  // ------------------------------------------------
  // handleSubmit
  // ------------------------------------------------
 
    handleSubmit(event) {
        event.preventDefault();
       
        this.setState({ submitted: true });
        const { first_name, last_name, user_name, email, password } = this.state;
        const { dispatch } = this.props;
        var user={first_name,  last_name, user_name, email, password};
        if (first_name && last_name && user_name && email && password) {
          console.log('dispatching -> register');
          var history = this.props.history;
          dispatch(userActions.register(history, user));
        }
    }


render() {
   const{first_name,last_name,email,password,user_name}=this.state;
    return (
      <div>
        <MuiThemeProvider>
          <div style={styles.Container}>
            <h3>Sign Up</h3>
              <form name="form" onSubmit={this.handleSubmit}> 
                <Container>
                  <Row>
                    <Col sm={6}>
                      <TextField
                        hintText="First Name"
                        floatingLabelText="First Name "
                        name="first_name"
                        value={first_name}
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
                        hintText="User Name"
                        floatingLabelText="User Name"
                        name="user_name"
                        value={user_name}
                        onChange={this.handleChange} 
                      />
                    </Col>
                    <Col sm={6}>
                      <TextField
                        hintText="Last Name"
                        floatingLabelText="Last Name "
                        name="last_name"
                        value={last_name}
                        onChange={this.handleChange} 
                      />
                      <TextField
                        hintText="Password"
                        type="password"
                        floatingLabelText="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange} 
                      />
                     
                    </Col>
                  </Row>
                </Container>
                <br/><br/>
                <RaisedButton style={styles.sbt} label="Submit" primary={true} type="submit"/>
              </form>
            </div>
         </MuiThemeProvider>
      </div>
    );
  } // render
}// Register Page


function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert,
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export {connectedRegisterPage as RegisterPage};