import React, { Component } from 'react';
import { Row, Col, Form, Table, Alert, FormControl, InputGroup, Button } from 'react-bootstrap'
import axios from 'axios';
import border from './border.jpg'
import waxButton from './waxbutton.png'
import TableBody from './tablebody'
import crow from './crow.png'





class Contact extends Component {
    constructor(props, context) {
        super(props, context);

    
        this.state = {
        
              tournamentName : '',
              tournamentDate : '',
              tournamentLocation : '',
              numberOfPlayers : 0,
              players : [],
              currentPlayer : null,
              playerName : '',
              playerVP : 0,
              playerPD : 0,
              playerStanding : 0,
              playerArmyType : '',
              playerW : 0,
              playerL : 0,
              playerD : 0,
              trackStats : false,
              playerArmy1 : [],
              playerArmy2 : [],
              toggleVis : false
            
          }
        }
    
//       getMessageValidationState() {

//         if (this.state.msgcounter >= 10) return 'success';
//         else if (this.state.msgcounter > 5) return 'warning';
//         else if (this.state.msgcounter > 0) return 'error';
//         return null;
//       }

//       getEmailValidationState() {
//         const emailcont = this.state.email
//         if (this.state.email === '') return null
//         else if (emailcont.includes('@')) return 'success';
//       }
    
      handleNameChange = e => {
        this.setState({ 
            playerName: e.target.value
         });
        
      }

      handleVPChange = e => {
        this.setState({ 
            playerVP: e.target.value
         });
        
      }

      handlePDChange = e => {
        this.setState({ 
            playerPD: e.target.value
         });
        
      }

      handleWinChange = e => {
        this.setState({ 
            playerW: e.target.value
         });
        
      }

      handleLossChange = e => {
        this.setState({ 
            playerL: e.target.value
         });
        
      }

      handleDrawChange = e => {
        this.setState({ 
            playerD: e.target.value
         });
        
      }

      handleArmyhange = e => {
        this.setState({ 
            playerArmyType: e.target.value
         });
        
      }

      handleStandingChange = e => {
        this.setState({ 
            playerStanding: e.target.value
         });
        
      }

//       handleEmailChange = e => {
//         this.setState({ 
//             email: e.target.value
//          });
//       }

//       handleMessageChange = e => {
//         this.setState({ 
//             message: e.target.value,
//             msgcounter : this.state.msgcounter + 1
//          });
//       }

handlePlayerDelete = e => {
  e.preventDefault()
  let arrayCopy = [...this.state.players]; // make a separate copy of the array
 

 let index = e.target.id
  if (index !== -1) {
     arrayCopy.splice(index, 1);
   this.setState({players: arrayCopy});
  }

  console.log(this.state.players)
}

compareBy(key) {
  return function (a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  };
}

sortBy(key) {
  let arrayCopy = [...this.state.players];
  arrayCopy.sort(this.compareBy(key));
  this.setState({players: arrayCopy});
}



handleSubmit = e => { 

        e.preventDefault()

        this.setState({
          numberOfPlayers : this.state.numberOfPlayers + 1
        })

    
          
          let currentPlayer  = {
          name : this.state.playerName,
          placement : this.state.playerStanding,
          wins : this.state.playerW,
          losses : this.state.playerL,
          draws : this.state.playerD,
          army : this.state.playerArmyType,
          VP : this.state.playerVP,
          PD : this.state.playerPD,
          army1 : 'This would be the first army list',
          army2 : 'This would be the second'
          }


        

        this.setState({
           players : this.state.players.concat(currentPlayer)
        })

        console.log(this.state)

     



}

tournamentNameSet = (e)=> {
  this.setState({ 
    tournamentName: e.target.value
 });
}

toggleVisibility = () => {
  this.setState({
    toggleVis : true
  })

  console.log(this.state.tournamentName)
}




//   handleSubmit = e => {

//     e.preventDefault();

//     let rname = ''
//     let remail = ''
//     let rmessage = ''
    

//     rname = this.state.name
//     remail = this.state.email
//     rmessage = this.state.message


//     console.log(rmessage)
    


//     axios({
//       method: "POST", 
//       url:"/sendmail", 
//       data: {
//           name: rname,   
//           email: remail,  
//           messsage: rmessage
//       }
//   }).then((response)=>{
//       if (response.data.msg === 'success'){
//           alert("Message Sent."); 
//           this.resetForm()
//       }else if(response.data.msg === 'fail'){
//           alert("Message failed to send.")
//       }
//   })

//   this.resetForm()

// }


// resetForm(){
//   this.setState({
     
//           name : '',
//           email : '',
//           message: '',
//           nmcounter : 0,
//           mlcounter : 0,
//           msgcounter : 0
        
      
//   })
// }


  render() {
      const formstyle = {
        background: '#262427',
        padding: '10px',
        color: 'white'


          
      }
      const headerS = {
        marginTop: 0,
        marginBottom: 0
      }

      

      const table = {
        marginTop: '3%',
        marginBottom: '0',
        overflowY: 'scroll'
        
      }

      const scroll = {
        backgroundImage: `url(${border})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '5%',
        paddingTop: '0',
        fontSize: '0.8em',
        marginBottom: '10%'
      }

      const buttonStyle = {
        backgroundImage: `url(${waxButton})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        height: '100px',
        width: '100px',
        backgroundColor: '#fbf6f2'

      }

      const checkformstyle = {
        color: 'black',
        textAlign: 'center',
        margin: '5px'
      }

      const titleStyle = {
        width: '100%',
        fontSize: '2.5em',
        color: 'yellow',
        textAlign: 'center',
        display: 'block'
        
      }

      const notTitleStyle = {
        fontSize: '2.5em',
        color: 'yellow',
        textAlign: 'center',
        display: 'none'
        
      }

      const crowButton = {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${crow})`,
        backgroundSize: 'contain',
        color: 'yellow',
        backgroundColor: '#ffffff00',
        border: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }


        


    


   return (
     <div>
      <Row>
        <br />
        <br />   

          <Col md = {2}></Col>
          <Col md={8} sm={12}>
          <Table style={table} responsive striped bordered hover variant="dark">
  <thead>
    <tr>
      <th  onClick={() => this.sortBy('placement')} >#</th>
      <th  onClick={() => this.sortBy('name')} >Player Name</th>
      <th  onClick={() => this.sortBy('wins')} >Final Record</th>
      <th  onClick={() => this.sortBy('army')} >Army</th>
      <th  onClick={() => this.sortBy('VP')} >VP - DP</th>
      <th>Edit</th>
    </tr>
  </thead>

  
 <tbody>   
   
   {this.state.players.length === 0 ? (
     'Fill out the form below to add players'
   ) :
   ''}
   
    {this.state.players.map((person, index) => {

      console.log(person)

    return <tr><td>{`${person.placement}`}</td><td>{`${person.name}`}</td><td>{`${person.wins} - ${person.losses} - ${person.draws}`}</td><td>{`${person.army}`}</td><td>{`${person.VP} - ${person.PD}`}</td><td><Button id={index} onClick={e => this.handlePlayerDelete(e)} variant="danger">Delete</Button></td></tr>

    })}
    
  
    {/* <tr style={table}>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr> */}
</tbody>

</Table>;
</Col>
<Col md = {2}> <br />
        <br /> <button style={crowButton}>Submit Results</button></Col>
</Row>
<Row>
     
    
      <Col style={scroll}  md={{ span: 8, offset: 2 }} sm={12}>
      <div style={{visibility: 'hidden'}}>Title</div>
      <div  style =  {this.state.toggleVis ? titleStyle : notTitleStyle}>{this.state.tournamentName}}</div>
      <InputGroup >
      
    <FormControl onChange={this.tournamentNameSet} style = {{visibility: this.state.toggleVis ? 'hidden' : 'visible'}} 
      placeholder="Tournament Name"
      aria-label="Tournament Name"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button onClick={this.toggleVisibility} style = {{visibility: this.state.toggleVis ? 'hidden' : 'visibile'}} style = {{fontSize : '0.7em'}} variant="primary">Add </Button>
    </InputGroup.Append>
  </InputGroup>
      <Form onSubmit={this.handleSubmit.bind(this)}>
      <Form.Label style={headerS} style={{visibility: 'hidden'}}>New Player:</Form.Label>
  <Form.Row>
  <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Placement</Form.Label>
      <Form.Control onChange = {this.handleStandingChange}  as="select">
      <option>-</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  style={formstyle}as={Col} controlId="formGridPassword">
      <Form.Label style={headerS}>Player Name</Form.Label>
      <Form.Control onChange= {this.handleNameChange} type="text" placeholder="Name" />
    </Form.Group>


  <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>  Wins</Form.Label>
      <Form.Control onChange={this.handleWinChange} as="select">
      <option>-</option>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Losses</Form.Label>
      <Form.Control onChange={this.handleLossChange} as="select">
      <option>-</option>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Draws</Form.Label>
      <Form.Control onChange={this.handleDrawChange}  as="select">
      <option>-</option>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
      <option>10</option>
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label style={checkformstyle} >Track Seasonal <br />
      stats?</Form.Label>
    <Form.Check style={checkformstyle} aria-label="option 1" />
    </Form.Group>

  </Form.Row>

  <Form.Row>
  <Form.Group style={formstyle} controlId="formGridState">
      <Form.Label style={headerS}>Army</Form.Label>
      <Form.Control onChange={this.handleArmyhange} as="select">
      <option>---</option>
      <option>House Stark</option>
      <option>House Lannister</option>
      <option>Free Folk</option>
      <option>Nights Watch</option>
      <option>Neutral</option>
      </Form.Control>
    </Form.Group>
    Stats
    <Form.Group  style={formstyle}as={Col} controlId="formGridPassword">
      <Form.Label style={headerS}>Total VP</Form.Label>
      <Form.Control onChange={this.handleVPChange} type="text" placeholder="VP" />
    </Form.Group>
    <Form.Group  style={formstyle}as={Col} contVProlId="formGridPassword">
      <Form.Label style={headerS}>Total Points Destroyed</Form.Label>
      <Form.Control onChange={this.handlePDChange} type="text" placeholder="Points" />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridTextArea">
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text style={formstyle}>Copy/Paste ASOIAF Builder<br />
                                          List Here: (1st)
    </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  </Form.Group>
  <Form.Group id="formGridTextArea">
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text style={formstyle}>Copy/Paste ASOIAF Builder<br />
                                          List Here: (2nd)
    </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" />
  </InputGroup>
  </Form.Group>

  <button style={buttonStyle}>
    Add Player
  </button>
</Form>;
      </Col>
      </Row>
      </div>


    )}
};


export default Contact;