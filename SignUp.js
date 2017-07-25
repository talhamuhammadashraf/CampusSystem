import React, { Component } from 'react';
import * as firebase from 'firebase';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {browserHistory,Link} from 'react-router'
class SignUp extends Component{
    constructor(){
        super();
        this.state={type:""}
this.handleRadio=this.handleRadio.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}
componentDidMount(){
}
handleRadio(ev){
this.setState({type:ev.target.value})
console.log(this.state.type)
}
 handleSubmit(ev){
     
ev.preventDefault();
var name = this.refs.name.getValue();
var email = this.refs.email.getValue();
var pass = this.refs.pass.getValue();
var type= this.state.type;

console.log("type="+type)

console.log(email);
console.log(pass);
let createuser=firebase.auth().createUserWithEmailAndPassword(email,pass)
.then(data=>{
           firebase.auth().currentUser.updateProfile({
               displayName:this.refs.name.value,
           })
          var rootRef=firebase.database().ref();
           const speedRef=rootRef
           .child("user"+"/"+firebase.auth().currentUser.uid).set({
              email:email,
              password: pass,
              name: this.refs.name.getValue(),
              type:this.state.type
           })
          
var typeOf;
    var userId = firebase.auth().currentUser.uid;
   // const rootRef= firebase.database().ref();
    const Ref = rootRef.child('user/'+userId);
    Ref.on('value',snap => {
     typeOf=snap.val().type;
     if(typeOf==='student'){
       browserHistory.replace('/Student');
     }
     else if(typeOf==='company'){
       browserHistory.replace('/company');
    }})
})
.catch((err)=>{console.log(err)})
}
    render(){
return        (
<div> 
<center>
<Paper zDepth={5} rounded={false} style={style}>  
   <form onSubmit={this.handleSubmit}>
{
// Name<input ref='name' htmlFor="name"/><br/>
// Email<input ref='email' htmlFor="email"/><br/>
// Password<input ref='pass' type="password"/><br/>
// <button type="submit">Submit</button>
}
Name<br/><TextField
   hintText="Name"
//      floatingLabelText="Password"
      type="text"
      ref="name"
    /><br/>

Email<br/><TextField
   hintText="email"
//      floatingLabelText="Password"
      type="email"
      ref="email"
    /><br/>
    Password<br/><TextField
   hintText="Password"
//      floatingLabelText="Password"
      type="password"
      ref="pass"
    />
<br/><br/>
<form onChange={this.handleRadio}>Student<input name="radio" type="radio"  value="student" />
Company<input name="radio" type="radio" value="company" /></form>
<RaisedButton  type="submit">Submit</RaisedButton>

    </form>
</Paper>
<h4>Already have an account </h4>
    <RaisedButton primary={true}  onClick={(ev)=>{browserHistory.replace('/')}}>Sign In</RaisedButton>
    </center>
</div>
)
    }
}
 export default SignUp;




  const style = {
  border: 3,
  height: 400,
  width: "50%",
  padding:50,
  margin: 120,
  textAlign: 'center',
  display: 'inline-block',
};