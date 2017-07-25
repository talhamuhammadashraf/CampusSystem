import React,{Component} from "react";
import {Link,browserHistory} from 'react-router'
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
export default class Student extends Component{
constructor(){
super();
this.state={name:""}
}
//-------------------
componentWillMount(){
firebase.auth().onAuthStateChanged(
 ()=>{   
this.setState({name:firebase.auth().currentUser.displayName})
 })}
render(){
    return(<div >
    <CircularProgress />
    <h1>Welcome {this.state.name}</h1>
    
    <RaisedButton style={{ "width": "35%" }} primary={true}  onClick={(ev)=>{browserHistory.replace('/cv')}} >Upload CV</RaisedButton>
    <br/><br/>
    <RaisedButton primary={true} style={{ "width": "35%" }} onClick={(ev)=>{browserHistory.replace('/viewjobs')}} >View Jobs</RaisedButton>
    </div>)
}
}