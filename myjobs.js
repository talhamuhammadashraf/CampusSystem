import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import React ,{Component} from 'react'
import firebase from 'firebase';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {browserHistory} from "react-router"

export default class VStudent extends Component{

     constructor(){
         super();
this.state={
arr:[]
}
}
componentDidMount(){
firebase.auth().onAuthStateChanged(()=>{firebase.database().ref().child('jobs').orderByChild("uid").equalTo(firebase.auth().currentUser.uid).on("value",(snap)=>{
    var dataSnapshot=snap.val();
    var keys= dataSnapshot
    var vals = [];
    for(var i in dataSnapshot){
        vals.push(dataSnapshot[i])
    }
    this.setState({arr:vals})
        
    
})
})}

     render(){
console.log(this.state.arr)
          
         return(
<div>{this.state.arr.map((jobs, ind)=>(
    <div key={ind}>
        <Box jobs={jobs}/>
    </div>
))
}</div>
         )
     }
 }
 


 //--------------------------------------------


  class Box extends Component{
constructor(props){
super(props);
console.log(props)
this.state = {
open: false,

arr: []
}
this.handleOpen=this.handleOpen.bind(this);
this.handleClose=this.handleClose.bind(this);
this.handleTouchTap=this.handleTouchTap.bind(this);
}
handleOpen(){
this.setState({open: true});
};

handleClose(){
this.setState({open: false});
}
handleTouchTap(event){
// This prevents ghost click.
event.preventDefault();

this.setState({
open: true,
anchorEl: event.currentTarget,
});
};

componentDidMount(){
var obj = this.props.jobs.applied;
console.log(obj)
var arr = [];
for(let a in obj){arr.push(obj[a])}
console.log(arr)

this.setState({arr})
}
      render(){
    console.log(this.state.arr)  
          var arr = this.state.arr;
          var jobs = this.props.jobs;
          return(
              <div>
<center>
<Paper zDepth={5} rounded={true} style={style}>  

<ul style={{ "backgroundColor": "#E0F2F1" }}>
<li>Company Name:   {jobs.company}  </li>
<li>Title       :   {jobs.title}  </li>
<li>Salary      :   {jobs.salary} </li>
<li>Experience  :   {jobs.experience}  </li>
</ul>
        <RaisedButton label="Applied Candidates" onClick={this.handleOpen} />
        <Dialog title="Student Data" open={this.state.open}>

{
arr.map((value,ind)=>(
<div>    <Paper zDepth={5} style={sStyle}  rounded={true}>
<center>        <b>{'Name'+"    "+value.name}</b><br/></center>
        <i>{'Last Name'+"       "+value.lastname}</i><br />
        <i>{'Email'+"           "+value.email}</i><br />
        <i>{'Education'+"       "+value.education}</i>       <br />         
        <i>{'Experience'+"      "+value.experience}</i><br />
        <i>{'Institute'+"       "+value.institute}</i><br />

<Divider/>    </Paper><br/></div> 
    ))
}
<center>        <RaisedButton onClick={this.handleClose}>Close</RaisedButton></center>

        </Dialog>
{/*
<RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleClose}
        >
          <Menu>
{
// arr.map((value,ind)=>(
// <MenuItem primaryText={''+value.email}>
// </MenuItem>))
}           

            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
                    </Menu>
        </Popover>
*/}
    <Divider />
</Paper>  <br/><br/>
    <RaisedButton onClick={(ev)=>{browserHistory.replace('/company')}}>Back</RaisedButton>

</center>

</div>

            )
      }
  } 


   const style = {
  border: 3,
  height: 120,
  width: "50%",
  padding:10,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};
   const sStyle = {
  height: "50%",
  width: "inherit",
  
};