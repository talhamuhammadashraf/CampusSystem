import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router'
import React ,{Component} from 'react'
import firebase from 'firebase';
export default class VStudent extends Component{
     constructor(){
         super();
this.state={
    arr:[]
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
    var keys= dataSnapshot
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
    <center>
<Paper zDepth={5} rounded={true} style={style}>
    <ul key={ind} style={{ "backgroundColor": "#E0F2F1" }}>
        <b><li>{cv.name}</li></b>
        <li>Last Name:{cv.lastname}</li>
        <li>Email:{cv.email}</li>
        <li>Experience:{cv.experience}</li>
        <li>Education{cv.education}</li>
        <li>Institute:{cv.institute}</li>
    </ul>
 <Divider />
</Paper>  
  <br/><br/>
    <RaisedButton onClick={(ev)=>{browserHistory.replace('/company')}}>Back</RaisedButton>
</center>
))
}</div>
         )
     }
 }
    const style = {
       backgroundColor:"white",
  border: 3,
  height: 150,
  width: "50%",
  padding:10,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};