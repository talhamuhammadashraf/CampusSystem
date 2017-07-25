import Paper from 'material-ui/Paper';
import {browserHistory,Link} from "react-router"

import React ,{Component} from 'react'
import firebase from 'firebase';
import {List, li} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

export default class JobsForAdmin extends Component{
     constructor(){
         super();
this.state={
    arr:[],
    keys:[]
}
     }
componentWillMount(){
firebase.database().ref().child('jobs').on("value",(snap)=>{
    var dataSnapshot=snap.val();
    var keys = Object.keys(dataSnapshot)
    this.setState({keys})
    var vals = [];
    for(var i in dataSnapshot){
        vals.push(dataSnapshot[i])
    }
    this.setState({arr:vals})
        
// this.setState({arr:keys})
    
})
}
     render(){
console.log(this.state.arr)
         
         return(
<div>{this.state.arr.map((jobs, ind)=>(
    // <ul key={ind}>
    //     <li>Company Name:{jobs.company}</li>
    //     <li>Title:{jobs.title}</li>
    //     <li>Salary:{jobs.salary}</li>
    //     <li>Experience:{jobs.experience}</li>
    // </ul>

<div><center>
<Paper zDepth={5} rounded={true} style={style}> 
<ul key={ind} style={{ "backgroundColor": "#E0F2F1" }}>
<li> Company Name:{jobs.company}  </li>
<li> Title:{jobs.title}</li>
<li> Salary:{jobs.salary} </li>
<li >Experience:{jobs.experience}  </li>
          </ul>
    <Divider /><RaisedButton onClick={(ev)=>{
        let id=this.state.keys[ind]
        firebase.database().ref('jobs/').child(id).remove(()=>{alert('any')})
        .then(()=>{alert('deleted')})
        .catch(()=>{alert("Sory")})
        //alert(this.state.keys[ind])
    }}>Delete</RaisedButton>
     <Divider />
</Paper>  


  <br/><br/>
    <RaisedButton onClick={(ev)=>{browserHistory.replace('/adminauth')}}>Back</RaisedButton>
</center>
</div>
))
}</div>
         )
     }
 }

   const style = {
       backgroundColor:"white",
  border: 3,
  height: 120,
  width: "50%",
  padding:10,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};