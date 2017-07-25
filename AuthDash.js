import React,{Component} from "react";
import firebase from 'firebase';
import {browserHistory} from "react-router"
export default class AuthDash extends Component{
    
 constructor(props){
     super(props);
 }
 componentDidMount(){
     firebase.database().ref("user"+"/"+firebase.auth().currentUser.uid+"/type").on("Child_added",
         (snaphot)=>{var data=snaphot.val()
             }
     ).catch((error)=>{console.log(error)})
     .then((data)=>{
         if(data==='company')
         {browserHistory.replace('/postjob')}})
 }
  render(){
        return(
 <div>
      </div>  )
    }
}