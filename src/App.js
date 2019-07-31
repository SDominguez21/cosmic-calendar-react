import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar.js'

import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';
import AuthService from './services/AuthService.js';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      listOfTideEvents: [],
      listOfSunandMoonEvents: [],
      currentlyLoggedIn: null,
      ready: false,
      signupShowing: false,
      loginShowing: false,
   };

   this.service = new AuthService();
  
  
  }

  getAllEvents = async() => {

    let tides = await axios.get(`https://api.aerisapi.com/tides/:auto?&from=07/30/2019&to=07/31/2019&radius=50mi&limit=1&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR
    ` /*, {withCredentials: true}*/);

    let sunandmoon = await axios.get(`https://api.aerisapi.com/sunmoon/:auto?&from=07/30/2019&to=07/31/2019&format=json&client_id=ubVTEqqaNjJ2GI2wGFHqj&client_secret=DTmrLknIoE2Bk2HOBj6jHKJqcj0CBDK5KhyZTkoR
    `)
      
        this.setState({
        listOfTideEvents: tides.data, ready: true
      });
        this.setState({
        listOfSunandMoonEvents: sunandmoon.data, ready: true
        })
  }


getCurrentlyLoggedInUser = () =>{
  this.service.currentUser()
  .then((theUser)=>{
    this.setState({currentlyLoggedIn: theUser})
  })
  .catch(()=>{
    this.setState({currentlyLoggedIn: null})
  })
}

toggleForm = (whichForm) =>{

  let theForm;

  if(whichForm === "signup"){
    theForm = 'signupShowing'
  } else {
    theForm = 'loginShowing'
  }

  this.setState({[theForm]: !this.state[theForm]})
}



  componentDidMount() {
      this.getAllEvents();
      this.getCurrentlyLoggedInUser();

  }


render(){

  console.log('*************',this.state);


    return (
      <div>


      <Navbar 
      theUser = {this.state.currentlyLoggedIn} 
      pleaseLogOut = {()=> this.service.logout()}
      toggleForm = {this.toggleForm}
      getUser = {this.getCurrentlyLoggedInUser}
      
      />

      {this.state.signupShowing && 
        <Signup getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
         />
      }

      {this.state.loginShowing && 
        <Login getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
        />
      }

        <Switch>
        {/* <Route exact path="/projects" render ={(props)=> <ProjectIndex
           {...props} 
           theUser = {this.state.currentlyLoggedIn} 
           allTheProjects ={this.state.listOfProjects}
           getData = {this.getAllProjects}
           ready = {this.state.ready}
           theUser = {this.state.currentlyLoggedIn}
           />} />

          <Route exact path="/projects/:theID" render ={(props)=> <ProjectDetails
           {...props} 
           allTheProjects ={this.state.listOfProjects}
           ready = {this.state.ready}
           getData = {this.getAllProjects}
           theUser = {this.state.currentlyLoggedIn}
           />} /> */}



        </Switch>


      
    
      </div>
    );
  }
}

export default App;
