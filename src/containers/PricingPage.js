import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Container,Col,Row} from 'react-grid-system';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

// import {projectActions} from '../actions';

// import {store} from '../store';
/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const styles={
  main:{
    marginTop:60,
  },
  btn:{
    marginLeft: '25%',
  },
   paper: {
    display: 'inline-block',
    width:230,
   },
   menu:{
    width:220,

  },
  header:{
    width:230,
  },
  menuItem:{
    textAlign:'center',
    fontSize:30,
    color:'#00BCD4',
  },
};

class PricingPage extends React.Component {
  constructor(props){
    super(props);
  }    


  componentDidMount() {
    const {dispatch} = this.props;

    //var user = JSON.parse(localStorage.getItem('user'));
    
        
  }

    render() {
     // var  studies = JSON.parse(localStorage.getItem('studies'));
     console.log("props: " +this.props);

      return (
          <div style={styles.main}>
            <Container>
              <Row>
                <Col sm={3}>
                  <AppBar
                    title="Free"
                    showMenuIconButton={false}
                    style={styles.header}
                  />
                  <Paper transitionEnabled={true} style={styles.paper}>
                    <Menu  style={styles.menu}>
                      <MenuItem style={styles.menuItem} primaryText="$ 0.00" />
                      <Divider/>
                      <MenuItem primaryText="Core platform features"/>
                      <MenuItem primaryText="No Support"/>
                      <MenuItem primaryText="Sleeps After 30 minutes"/>
                      <MenuItem primaryText="free dyno hours"/>
                      <MenuItem primaryText="Custom  Domains"/>
                      <RaisedButton label="Sign Up" primary={true} style={styles.btn} />
                    </Menu>
                  </Paper>
                </Col>
                <Col sm={3}>
                  <AppBar
                    title="Beginner"
                    showMenuIconButton={false}
                    style={styles.header}
                  />
                  <Paper style={styles.paper}>
                    <Menu style={{width: '170.5px'}}>
                      <MenuItem style={styles.menuItem} primaryText="$ 4.00" />
                      <Divider/>
                      <MenuItem primaryText="Core platform features" />
                      <MenuItem primaryText="No Support" />
                      <MenuItem primaryText="Never sleeps" />
                      <MenuItem primaryText="Application metrics" />
                      <MenuItem primaryText="Custom  Domains " />
                      <RaisedButton label="Sign Up" primary={true} style={styles.btn} />
                    </Menu>
                  </Paper>
                </Col>
                <Col sm={3}>
                  <AppBar
                    title="Professional"
                    showMenuIconButton={false}
                    style={styles.header}
                  />
                  <Paper style={styles.paper}>
                    <Menu  style={{width: '168.5px'}}>
                      <MenuItem style={styles.menuItem} primaryText="$ 12.00" />
                      <Divider/>
                      <MenuItem primaryText="All standard Features" />
                      <MenuItem primaryText="No Support" />
                      <MenuItem primaryText="Simple horizontal scalability" />
                      <MenuItem primaryText="Language runtime metrics" />
                      <MenuItem primaryText="Preboot" />
                      <RaisedButton label="Sign Up" primary={true} style={styles.btn} />
                    </Menu>
                  </Paper>
                </Col>
                <Col sm={3}>
                  <AppBar
                    title="Enterprice"
                    showMenuIconButton={false}
                    style={styles.header}
                  />
                  <Paper style={styles.paper}>
                    <Menu  style={{width: '168.5px'}}>
                      <MenuItem style={styles.menuItem}  primaryText="$ 20.00" />
                      <Divider/>
                      <MenuItem primaryText="All standard Features" />
                      <MenuItem primaryText="No Support" />
                      <MenuItem primaryText="Autoscaling" />
                      <MenuItem primaryText="Language runtime metrics" />
                      <MenuItem primaryText="Dedicated" />
                      <RaisedButton label="Sign Up" primary={true} style={styles.btn} />
                    </Menu>
                  </Paper>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
    }


function mapStateToProps(state) {
  return state;

  //return {
    //studies: state.studies
  //};
}
 
const connectedPricingPage = connect(mapStateToProps)(PricingPage);
export { connectedPricingPage as PricingPage };
