import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { grey500} from 'material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {userActions} from '../actions';


const styles={
 flatBtn: {
    fill: grey500,
    float: 'right',
  },
  main:{
    marginLeft:20,
  },
};


class UserListPage extends React.Component {
  

  componentDidMount() {
    const {dispatch} = this.props;

    var resp = dispatch(userActions.getAll());

    
  }

  

  render() {
    // var  studies = JSON.parse(localStorage.getItem('studies'));
    // console.log("props: " +this.props);
    
    console.log(`---> render got users: ${  JSON.stringify(this.props.users)}`);

    var tableBody = [];
    if (this.props.users) {
      for (var i = 0; i < this.props.users.length; i++) {
        console.log(`users ${  i + 1  }:${  JSON.stringify(this.props.users[i])}`);
        var user = this.props.users[i];
        tableBody.push(
          <TableRow key={i+1} >
              console.log("got user: " + user.created_at);
            <TableRowColumn style={{width: '50px'}}>{i+1}</TableRowColumn>
            <TableRowColumn>{user.username}</TableRowColumn>
            <TableRowColumn>{user.email}</TableRowColumn>
            <TableRowColumn>{user.created_at} </TableRowColumn>
            <TableRowColumn>{user.updated_at}</TableRowColumn>

          </TableRow>
                );
      }
    }

      return (
        <MuiThemeProvider>
          <div style={styles.main}>
            
            <h2>Users</h2>
              <Table onRowSelection={this.handleRowSelection} >
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                      <TableHeaderColumn style={{width: '50px'}}>#</TableHeaderColumn>
                      <TableHeaderColumn>User Name</TableHeaderColumn>
                      <TableHeaderColumn>Email</TableHeaderColumn>
                      <TableHeaderColumn>Created At</TableHeaderColumn>
                      <TableHeaderColumn>Updated At</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {tableBody}
                  </TableBody>
                </Table>
            
          </div>
      </MuiThemeProvider>
      );
    }
  }

function mapStateToProps(state) {
  console.log(`---> UserList got state: ${  JSON.stringify(state.users.Users)}` );
  return {
   users: state.users.Users
 };
}
 
const connectedUserListPage = connect(mapStateToProps)(UserListPage);
export { connectedUserListPage as UserListPage };
