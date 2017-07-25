import React,{Component} from "react";
import {browserHistory,Link} from "react-router"
import firebase from "firebase"
import RaisedButton from 'material-ui/RaisedButton';

export default class Company extends Component{
constructor(){
    super();
this.state={name:""}
}

componentWillMount(){
firebase.auth().onAuthStateChanged(
 ()=>{   
this.setState({name:firebase.auth().currentUser.displayName})
 })}


render(){
    return(
<div>
<h1>Welcome {this.state.name}</h1>
<RaisedButton style={{ "width": "35%" }} primary={true}  onClick={(ev)=>{browserHistory.replace('/myjobs')}} >My Posted Jobs</RaisedButton>
<br/><br/>
<RaisedButton style={{ "width": "35%" }} primary={true}  onClick={(ev)=>{browserHistory.replace('/postjob')}} >Post New Jobs</RaisedButton>
<br/><br/>
<RaisedButton primary={true} style={{ "width": "35%" }} onClick={(ev)=>{browserHistory.replace('/viewstudent')}} >View Student CVs</RaisedButton>
</div>

)
}
}