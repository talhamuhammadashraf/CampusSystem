import Divider from 'material-ui/Divider';
import {browserHistory,Link} from "react-router"
import Paper from 'material-ui/Paper';
import React ,{Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';

import firebase from 'firebase';
export default class VStudent extends Component{
     constructor(){
         super();
this.state={
    arr:[],
    keys:[]
}
     }
componentWillMount(){
//     alert()
//     firebase.database().ref().child('user').on("value",(dataSnap)=>{
//         let snap=dataSnap.val();
//         let array=[]
//         array.push(snap)
//         alert(array)
// this.setState({arr:array})    })
// console.log(this.state.arr)
firebase.database().ref().child('cv').on("value",(snap)=>{
    var dataSnapshot=snap.val();
    var keys= Object.keys(dataSnapshot)
    this.setState({keys})
    var vals = [];
    for(var i in dataSnapshot){
        vals.push(dataSnapshot[i])
    }
    this.setState({arr:vals})
        
// this.setState({arr:keys})
    
})
console.log(this.state.arr)
}
     render(){
         return(
<div>{this.state.arr.map((cv, ind)=>(
   <div>
   <center>
<Paper zDepth={5} rounded={true} style={style}> 
    <ul key={ind} style={{ "backgroundColor": "#E0F2F1" }}>
        <li>Name:{cv.name}</li>
        <li>Last Name:{cv.lastname}</li>
        <li>Email:{cv.email}</li>
        <li>Experience:{cv.experience}</li>
        <li>Education{cv.education}</li>
        <li>Institute:{cv.institute}</li>
    </ul><hr/>
    <button onClick={(ev)=>{
        let id=this.state.keys[ind]
        firebase.database().ref('cv/').child(id).remove(()=>{alert('any')})
        .then(()=>{alert('deleted')})
        .catch(()=>{alert("Sory")})
        //alert(this.state.keys[ind])
    }}>Delete</button>
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