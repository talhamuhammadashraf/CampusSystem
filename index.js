import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {browserHistory,hashHistory,Link,Router,IndexRoute,Route} from "react-router"
import App from './App';
import AdminAuth from './adminAuth'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';//import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";
import SignIn from "./SignIn"
//import {Dashboard} from './dashboard'
//import Out from './out'
import AuthDash from './AuthDash'
import SignUp from './SignUp'
import Jobs from './postjob.js'
import VJobs from './viewjobs.js'
import Student from './student.js'
import Company from './company.js'
import VStudent from './viewstudent.js'
import CV from './cv'
import MyJobs from './myjobs'
import JobsForAdmin from './jobsForAdmin'
import CVSForAdmin from './cvsForAdmin'
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBEyvq6orAN3V_9tswPaj9O4CAwBHxRWLg",
    authDomain: "blazing-heat-7297.firebaseapp.com",
    databaseURL: "https://blazing-heat-7297.firebaseio.com",
    projectId: "blazing-heat-7297",
    storageBucket: "blazing-heat-7297.appspot.com",
    messagingSenderId: "912168317097"
  };
  firebase.initializeApp(config);

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
<Router history={browserHistory}>
            
        <Route path="/" component={App}><IndexRoute component={SignIn}/> 
         <Route  path="/SignUp" component={SignUp}/>
         <Route  path="/postjob"  component={Jobs}/>
        <Route path="/student" component={Student}/>
        <Route path="/company" component={Company}/>
        <Route path="/viewjobs" component={VJobs}/>
        <Route path="/viewstudent" component={VStudent}/>
        <Route path="/cv" component={CV}/>
        <Route path="/myjobs" component={MyJobs}/>
        <Route  path="/adminAuth" component={AdminAuth}/>
        <Route path="/jobsForAdmin" component={JobsForAdmin}/>
        <Route path="/cvsForAdmin" component={CVSForAdmin}/>
        {
  //      <Route  path="/out" component={Out}><IndexRoute component={AuthDash}/></Route>
        // <Route  path="/SignIn" component={SignIn}/>
        // <Route path="/postjob" component={PostJob}/>
        }        </Route>
            </Router>
  </MuiThemeProvider>, document.getElementById('root'));
//registerServiceWorker();
