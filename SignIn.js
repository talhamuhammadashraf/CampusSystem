import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from "react-router-dom"
import {browserHistory} from "react-router"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class SignIn extends Component{
    constructor(props){
        super(props);

this.handleSubmit=this.handleSubmit.bind(this);
}


 handleSubmit(ev){
     
ev.preventDefault();
//var name = this.refs.name.value;
var email = this.refs.email.getValue();
var pass = this.refs.pass.getValue();
console.log(email);
console.log(pass);
let createuser=firebase.auth().signInWithEmailAndPassword(email,pass)
.then(()=>{console.log("signed")
// if((firebase.database().ref("user/"+firebase.auth().currentUser.uid+"/type"))==='student'){
// browserHistory.replace('/student')
// }
// else{
// browserHistory.replace('/company')
// }
var typeOf;
    var userId = firebase.auth().currentUser.uid;
    const rootRef= firebase.database().ref();
    const Ref = rootRef.child('user/'+userId);
    Ref.on('value',snap => {
     typeOf=snap.val().type;
     if(userId==='yacRdAOf9GQQZxLfR2xBjKsHuKp1'){
       browserHistory.replace('/adminAuth');
    }
    else    if(typeOf==='student'){
       browserHistory.replace('/Student');
     }
     else if(typeOf==='company'){
       browserHistory.replace('/company');
    }})
}
)
.catch((err)=>{console.log(err)})
}
    render(){
return        (<div >
<center>
<Paper zDepth={5} rounded={false} style={style}>  
    <form  onSubmit={this.handleSubmit}>
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
<RaisedButton  type="submit">Submit</RaisedButton>
    </form>
</Paper>
    </center>

</div>)
    }
}
 const style = {
  border: 3,
  height: 300,
  width: "50%",
  padding:50,
  margin: 120,
  textAlign: 'center',
  display: 'inline-block',
};


