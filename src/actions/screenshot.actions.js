import {screenshotConstants} from '../constants';
import {screenshotService} from '../services';
import {alertActions} from './';


export const screenshotActions = {
  
  getAll,
  selectedIssue,
  create
  
};

// -----------------------------------------------------------------------------
//     CREATE SCREENSHOT
// -----------------------------------------------------------------------------
function create(sampleFile) {
  console.log('[issue-action] create()');

  return (dispatch) => {
    dispatch(request({sampleFile}));

    screenshotService.create(sampleFile)
            .then(
                (sampleFile) => {
                  dispatch(success(sampleFile));
                  console.log('action:create screenshot: push /');
                  // browserHistory.push('/familyList');
                },
                (error) => {
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
                }
            );
  };

  function request(issue) {
    return {type: screenshotConstants.CREATE_REQUEST, sampleFile};
  }
  function success(issue) {
    return {type: screenshotConstants.CREATE_SUCCESS, sampleFile};
  }
  function failure(error) {
    return {type: screenshotConstants.CREATE_FAILURE, error};
  }
}// create


// 
//-------------------Request  list of projects --------------------
//


function getAll(selectedProject) {

  console.log("====== getAll ======");
  console.log("selectedProject in issue action "+selectedProject);
  return (dispatch) => {
    dispatch(request());

    screenshotService.getAll(selectedProject)
            .then(
                (issues) => dispatch(success(issues)),
                (error) => dispatch(failure(error))
            );
  };

  

  function request() {
    return {type: screenshotConstants.GETALL_REQUEST};
  }
  function success(issues) {
    console.log("********* action got issues: " + JSON.stringify(issues) );
    return {type: screenshotConstants.GETALL_SUCCESS, issues};
  }
  function failure(error) {
        console.log("********* action got projects failure: " +error );

    return {type: screenshotConstants.GETALL_FAILURE, error};
  }
}

function selectedIssue(key){
    console.log("++++ issue actions, selectedProject() key: ", key);
    return {
        type: screenshotConstants.ISSUE_SELECTED,
        payload: key
    }
}



