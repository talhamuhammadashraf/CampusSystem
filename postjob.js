import React,{Component} from 'react';
import firebase from 'firebase';
import TextField from 'material-ui/TextField';
import {browserHistory} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';


class Jobs extends Component{
    constructor(){
        super();
        this.state={
           arr:[],
            title:"",
            experience:"",
            salary:"",
            company:""
        }
this.handle=this.handle.bind(this)
    }
    handle(ev){
     ev.preventDefault(); 
      let obj={
            uid:firebase.auth().currentUser.uid,
            title:this.state.title,
            experience:this.state.experience,
            salary:this.state.salary,
            company:this.state.company
        }
    //     var arr = this.state.arr
    //     arr.push(obj)
    //    this.setState({arr})
    alert(obj.uid)
    alert(obj.title)
    alert(obj.experience)
    alert(obj.salary)
    alert(obj.company)    
       console.log(this.state.arr);
    
        let reference=firebase.database().ref()
        reference.child("jobs").push(obj)
        // alert()
        //.then(()=>{alert("aik dm jhakkas")})
        //.catch(()=>{alert("ponka")})
    }
    render(){
        return<center><form onSubmit={this.handle}>
       
<TextField onChange={(ev)=>{this.setState({title:ev.target.value})}}  type="text" ref='title' hintText="title"/><br/>
<TextField onChange={(ev)=>{this.setState({salary:ev.target.value})}} type="text" ref="salary" hintText="salary"/><br/>
<TextField onChange={(ev)=>{this.setState({experience:ev.target.value})}} type="text" ref="experience" hintText="experience"/><br/>
<TextField onChange={(ev)=>{this.setState({company:ev.target.value})}} type="company" ref="company" hintText="company"/><br/>
<RaisedButton  type="submit">Submit</RaisedButton>

        </form>
        
  <br/><br/>
    <RaisedButton onClick={(ev)=>{browserHistory.replace('/company')}}>Back</RaisedButton>        </center>
    }
}
export default Jobs;
//----------------------------------------------
//
//
//
//

// import React, { Component } from 'react';
// import * as firebase from 'firebase';
// class Jobs extends React.Component{
// constructor(){
//     super();
//     this.state={
//         jobs:[]
//     }
// }
// job(ev){
//     ev.preventDefault();
//  var job={
//   jobTitle:this.refs.jobTitle.value,
//   salary:this.refs.salary.value,
//   jobDescription:this.refs.jobDescription.value
//  }
//  this.setState((prev)=>({
//      jobs: prev.jobs.concat(job) 
//  }))
//         //         var currentCompanyRoof=firebase.database().ref();
//         //         const currentCompanyjob=currentCompanyRoof.child("jobs"+"/"+firebase.auth().currentUser.uid).set(
//         //          this.state.jobs
//         //    )
//                 var allJobs=firebase.database().ref();
//                 const allJobs1=allJobs.child("jobs/"+firebase.auth().currentUser.uid).push(
//                  this.state.jobs
//            )
    
// }

// render(){
//     return(
//     <div>    
// <div>       
//     Job Title <input type="text" ref="jobTitle"/> <br />
//     Salary <input type="number" ref="salary"/> <br />
//     Job Description <input type="text" ref="jobDescription"/>
//     <button onClick={this.job.bind(this)}>POST</button>
//     <buttom >
//     </buttom>
// </div>
//     <ul>
//         {this.state.jobs.map((job,index)=>(
//             <li key={index}> 
//             {job.jobTitle} <br />
//             {job.salary}   <br />
//             {job.jobDescription} <br />
//             </li>
//         ))}
//     </ul>
//     </div>
//     )
// }
// }
// export default Jobs;
