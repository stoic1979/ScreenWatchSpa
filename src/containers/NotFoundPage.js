import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class NotFoundPage extends React.Component {
  constructor(props){
    super(props);
  }    

  render() {
     // var  studies = JSON.parse(localStorage.getItem('studies'));
     console.log("props: " +this.props);

      return (
        <MuiThemeProvider>
          <div>
          <br />
          <center>
           <h2>Page not found!!!</h2>
          </center>
          <br />
          </div>
      </MuiThemeProvider>
      );
    }
}//NotFoundPage


function mapStateToProps(state) {
  return state;

  //return {
    //studies: state.studies
  //};
}
 
const connectedNotFoundPage = connect(mapStateToProps)(NotFoundPage);
export { connectedNotFoundPage as NotFoundPage };
