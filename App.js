// import React, { Component } from 'react';
// //import {withRouter} from 'react-router'; 
// import './App.css';
// import {BrowserRouter as Router,Route} from "react-router-dom"; 
// import {Routesss} from './dashboard.js'
// import SignIn from "./SignIn"
// class App extends Component {
//   // constructor(){
//   //   super();
//   //  // this.handleAdmin=this.handleAdmin.bind(this);
//   //   //this.handleAdmin=this.handleAdmin.bind(this);
//   //   //this.handleAdmin=this.handleAdmin.bind(this);
//   // }
    
//   render() {
//     return (
//       <div className="App">
//       <Router>
//       <div>
//     <Route  path="/" component={Routesss}/>
//       </div>
//    </Router>
//       </div>
//     );
//   }
// }

// export default App;
import * as firebase from 'firebase';
import FirebaseAuth from 'firebase';
import FirebaseUser from 'firebase';
import React,{Component} from "react";
import AppBar from 'material-ui/AppBar';
import {browserHistory,hashHistory,Link,Router,Route} from "react-router"
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component{
  constructor(props){
    super(props);
    this.handleSignUp=this.handleSignUp.bind(this)
    this.out=this.out.bind(this);
    this.state={name:null,email:null,password:null,uid:null }
}
componentWillMount(){
  firebase.auth().onAuthStateChanged(
(user)=>{
this.setState({name:user.name,
  email:user.email,password:user.password,uid:user.uid})
})
}
  handleSignUp(){
    browserHistory.replace('/SignUp')

}
out(){
firebase.auth().signOut()
.then(()=>{console.log("Signed Out")
browserHistory.replace("/")
})
.catch((err)=>{console.log(err)})
    }
  render(){
    return(<div><AppBar showMenuIconButton="false"
    title="Job Portal" 
    iconElementRight={ (firebase.auth().currentUser)?
      //!(this.state.user.email)?
      <RaisedButton onClick={this.out}>Sign out</RaisedButton>:
      <RaisedButton onClick={this.handleSignUp} >Sign Up</RaisedButton>
    }/>
    {this.props.children}
    </div>
    )
  }
} export default App;