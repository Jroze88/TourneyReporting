import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import axios from 'axios';
import ModalPopup from './Modal'


class Contact extends Component {
    constructor(props, context) {
        super(props, context);

    
        this.state = {
        
              name : '',
              email : '',
              message: '',
              nmcounter: 0,
              mlcounter : 0,
              msgcounter : 0
            
          }
        }
    
      getMessageValidationState() {

        if (this.state.msgcounter >= 10) return 'success';
        else if (this.state.msgcounter > 5) return 'warning';
        else if (this.state.msgcounter > 0) return 'error';
        return null;
      }

      getEmailValidationState() {
        const emailcont = this.state.email
        if (this.state.email === '') return null
        else if (emailcont.includes('@')) return 'success';
      }
    
      handleNameChange(e) {
        this.setState({ 
            name: e.target.value,
            nmcounter : this.state.nmcounter + 1
         });
        
      }

      handleEmailChange(e) {
        this.setState({ 
            email: e.target.value
         });
      }

      handleMessageChange(e) {
        this.setState({ 
            message: e.target.value,
            msgcounter : this.state.msgcounter + 1
         });
      }



  handleSubmit = e => {

    e.preventDefault();

    let rname = ''
    let remail = ''
    let rmessage = ''
    

    rname = this.state.name
    remail = this.state.email
    rmessage = this.state.message


    console.log(rmessage)
    


    axios({
      method: "POST", 
      url:"/sendmail", 
      data: {
          name: rname,   
          email: remail,  
          messsage: rmessage
      }
  }).then((response)=>{
      if (response.data.msg === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
      }
  })

  this.resetForm()

}


resetForm(){
  this.setState({
     
          name : '',
          email : '',
          message: '',
          nmcounter : 0,
          mlcounter : 0,
          msgcounter : 0
        
      
  })
}


  render() {
      const formstyle = {
          card : {
          marginTop : '8%',
          color : 'white',
          backgroundColor : '#36454f',
          padding: '30px',

          }
      }
      const headerS = {
        paddingTop : '0'
      }

      const title = {
        color: 'white',
        fontSize : '2em'
      }


   return (
    
        <div className="textdiv row">
          <h2 style={title}>Contact:</h2>
        <div  className="col-md-4"></div>
    
      <div  style = {formstyle.card}   id="aboutinfo"className="col-md-4">
      <div style={headerS} className='page-header'>
      <h1>Get in touch!</h1>
      </div>
        <Form >

    
    <FormGroup
          type="text"
      >     
     <FormControl 
     componentClass="textarea"
    onChange = {(e) => this.handleNameChange(e)}
    value = {this.state.name}
    placeholder="Name" />
     <FormControl.Feedback />
     </FormGroup>


    <FormGroup
      type="text"      
      validationState={this.getEmailValidationState()} 
    >
       <FormControl componentClass="textarea"
        onChange = {(e) => this.handleEmailChange(e)}
        validationState={this.getEmailValidationState()}  
        value = {this.state.email}
        placeholder="Email" />
        <FormControl.Feedback />
        </FormGroup>
        <br></br><br></br>

    <FormGroup
    validationState={this.getMessageValidationState()}  
    type='text' 
    >
      <FormControl componentClass="textarea"
       onChange = {(e) => this.handleMessageChange(e)} 
       value = {this.state.message}
        placeholder="Shoot me a message:" />
        <FormControl.Feedback />
    </FormGroup>
    
        
    
        <Button onClick={(e) => {this.handleSubmit(e)}} type="submit">Submit</Button>
      </Form>
      </div>
      <div className="col-md-4"></div>
      </div>
/* //         <div>
//       <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
// <div className='row nameaddressrow'>

// <div className='col-md-8 form-group'>
        
//         <h1>Get in touch!</h1>

//         <label style={{display: 'none'}} htmlFor="name">Name</label>
//         <input placeholder="Name" type="text" autocomplete="new-password" className="form-control" id="name" />
//         <label style={{display: 'none'}} className = 'emailabel'>Email address</label>
//         <input placeholder="Email Address" type="email" autocomplete="new-password" className='form-control' id="email" aria-describedby="emailHelp" />


//     </div>
//     <div className='col-md-4'></div>
//     </div>
// <div className = 'row'>
// <div className='col-md-8'>
// <div className="form-group">
//         <label style={{display: 'none'}} htmlFor="message">Message</label>
//         <textarea placeholder="Message:" className="form-control message" autocomplete="new-password" rows="5" id="message"></textarea>
//     </div>
//     </div>
//     <div className='col-md-4'></div>
//     </div>
//     <div className = 'row'>
// <div className='col-md-8 form-group'>
// <button type="submit" className="btn submitform btn-primary">Submit</button>
//     </div>
//     <div className='col-md-4'></div>

//     </div>
// </form>
// </div> */

    )}
};


export default Contact;