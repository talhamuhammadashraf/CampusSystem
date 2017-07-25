import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//  import Upload from 'material-ui-upload/Upload';
import firebase from 'firebase';
import {browserHistory,Link} from 'react-router';
export default class CV extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            lastname:"",
            email:"",
            education:"",
            experience:"",
            institute:""
        }
        this.handle=this.handle.bind(this)
    }
        handle(ev){
             ev.preventDefault();
             var name=this.state.name;
             var lastname=this.state.lastname;
             var email=this.state.email;
             var education=this.state.education;
             var experience=this.state.experience;
             var institute=this.state.institute;
            var rootRef=firebase.database().ref()
           //const speedRef=rootRef
           .child('cv/'+firebase.auth().currentUser.uid).set({
              name:name,
            lastname:lastname,
            email:email,
            education:education,
            experience:experience,
          institute:institute,
           }).then(()=>{alert("hi")})
        }
    render(){
        return(<div>
<center><form onSubmit={this.handle}>
       
<TextField onChange={(ev)=>{this.setState({name:ev.target.value})}}  type="text" ref='name' hintText="First name"/><br/>
<TextField onChange={(ev)=>{this.setState({lastname:ev.target.value})}} type="text" ref="lastname" hintText="Last name"/><br/>
<TextField onChange={(ev)=>{this.setState({email:ev.target.value})}} type="text" ref="email" hintText="email"/><br/>
<TextField onChange={(ev)=>{this.setState({education:ev.target.value})}} type="text" ref="education" hintText="education"/><br/>
<TextField onChange={(ev)=>{this.setState({experience:ev.target.value})}} type="text" ref="experience" hintText="experience"/><br/>
<TextField onChange={(ev)=>{this.setState({institute:ev.target.value})}} type="text" ref="institute" hintText="institute"/><br/>

<RaisedButton  type="submit">Submit</RaisedButton>

        </form>
        <br/>
    <RaisedButton  primary={true}  onClick={(ev)=>{browserHistory.replace('/student')}}>Back</RaisedButton>
        </center>        
        </div>)
    }
} 