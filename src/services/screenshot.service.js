import {settings} from "../config"


export const screenshotService = { getAll,create };


function _getToken() {
  var user = JSON.parse(localStorage.getItem('user'));
  return user.token;
}


// -----------------------------------------------------------------------------
//     CREATE ISSUE
// -----------------------------------------------------------------------------
function create(sampleFile) {
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(`[screenshot-service] got user: ${  JSON.stringify(user)}`);
  console.log(`[screenshot-service] got token: ${  user.token}`);

  var body = `sampleFile=${sampleFile}`;
  

  body += '&__v=0';
  

  console.log(`[screenshot-service] sending req, body: \n${  body}`);


  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: body,
  };
  const url = `${settings.API_ROOT}/screenShots/file_upload`
  return fetch(url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            return Promise.reject(response.statusText);
          }

          return response.json();
        })
    .then((screenshot_resp) => {
      console.log(`screenshot-service upload screenshot resp: ${  JSON.stringify(screenshot_resp)}` );

      return screenshot_resp;
    })
    .catch( (error) => {
          console.log("==================> error: " + error);

    });
}// create

function getAll(selectedProject) {

    console.log("====== issue-service getAll ======");
   console.log("selectedProject in issue service " +selectedProject);

    const requestOptions = {
        method: 'GET',
        headers: {'x-access-token': _getToken()},
    };
    const url = `${settings.API_ROOT}/issues/all_by_project/${selectedProject}`
    return fetch(url, requestOptions)
    .then((response) => {

          console.log("+++++++ resp: " + response);

          if (!response.ok) {
            return Promise.reject(response.statusText);
          }

          return response.json();
        })
    .then((issues) => {
      console.log(`++++++++ issue-service getAll issue_resp: ${  JSON.stringify(issues)}` );

      return issues;
    });
}// getAll




