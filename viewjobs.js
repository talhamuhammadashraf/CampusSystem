import React ,{Component} from 'react'
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class VStudent extends Component{
     constructor(){
         super();
this.state={
    JOBarr:[],
    JOBkeys:[],
    CVarr:[],
    CVkeys:[],
    USERarr:[],
    USERkeys:[]
}
    }
apply(ind){
    var cvID=this.state.CVkeys[ind]
    
// firebase.database().ref('cv/').child(cvID).on('value',(snap)=>{
    var cv=this.state.CVarr[ind];
    if(!cv){
        cv={name:firebase.auth().currentUser.displayName,
            email:firebase.auth().currentUser.email}
    }
var currentUserID=firebase.auth().currentUser.uid;
var jobID = this.state.JOBkeys[ind]
firebase.database().ref("jobs/"+jobID+"/applied").child(currentUserID).set(cv)
// })
}
componentDidMount(){
firebase.database().ref().child('jobs').on("value",(snap)=>{
    var dataSnapshot=snap.val();
    var keys= Object.keys(dataSnapshot)
    var vals = [];
    for(var i in dataSnapshot){
        vals.push(dataSnapshot[i])
    }
    this.setState({JOBarr:vals,
                    JOBkeys:keys,
                    
                },()=>{alert('state has been set')})
        
// this.setState({JOBarr:keys})
    
})

firebase.database().ref().child('cv').on("value",(snap)=>{
    var dataSnapshot=snap.val();
    var keys= Object.keys(dataSnapshot)
    var vals = [];
    for(var i in dataSnapshot){
        vals.push(dataSnapshot[i])
    }
    this.setState({CVarr:vals,
                    CVkeys:keys},()=>{alert('state has been set')})
        
// this.setState({JOBarr:keys})
    
})
firebase.database().ref().child('user').on("value",(snap)=>{
    var dataSnapshot=snap.val();
    var keys= Object.keys(dataSnapshot)
    var vals = [];
    for(var i in dataSnapshot){
        vals.push(dataSnapshot[i])
    }
    this.setState({USERarr:vals,
                    USERkeys:keys},()=>{alert('state has been set')})
        
// this.setState({JOBarr:keys})
    
})
}
     render(){console.log(this.state.JOBarr)
       return(
<div>{this.state.JOBarr.map((jobs, ind)=>(
    // <ul key={ev}>
    //     <li>Company Name:{jobs.company}</li>
    //     <li>Title:{jobs.title}</li>
    //     <li>Salary:{jobs.salary}</li>
    //     <li>Experience:{jobs.experience}</li>

    // </ul>
<div>
<List key={ind} style={{ "backgroundColor": "#E0F2F1" }}>
<ListItem primaryText={"Company Name:"+jobs.company}  />
<ListItem primaryText={"Title:"+jobs.title}  />
<ListItem primaryText={"Salary:"+jobs.salary} />
<ListItem primaryText={"Experience"+jobs.experience}  />
          </List>
    <Divider />
<RaisedButton onClick={this.apply.bind(this,ind)}>Apply</RaisedButton>    
</div>
))
}</div>
         )
     }
 }
 