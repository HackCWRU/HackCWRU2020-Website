import React, { Component } from 'react';
import HeaderSection from "./components/HeaderSection";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
//import headerBackground from "./Assets/backgrounds/Header_Section_Background.svg";
import './App.css';
import {Countdown,About} from './components';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      HackDate: 'Feb 9, 2020 21:00:00'
    }
  }

  render() {
    return (
      <React.Fragment>
      <Router>
        <div className = "App" >
              <Countdown HackDate = {this.state.HackDate} />
              <Switch>
                <Route key="home" path="/" exact strict render={() => (
                  <HeaderSection signUpConfirmation={false}/>   
                  )}/>/>
                <Route key="finishSignUp" path="/confirm" exact strict render={() => (
                  <HeaderSection signUpConfirmation={true}/>   
                  )}/>/>
              </Switch>
              <About/>
              <FAQ/>
           
            { /*<Schedule/>*/}
        </div>
        </Router>
        {/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/}
        <script src="/__/firebase/7.6.2/firebase-app.js"></script>

        {/*<!-- TODO: Add SDKs for Firebase products that you want to use. https://firebase.google.com/docs/web/setup#available-libraries -->*/}
        <script src="/__/firebase/7.6.2/firebase-analytics.js"></script>

        {/*<!-- Initialize Firebase -->*/}
        <script src="/__/firebase/init.js"></script>
        </React.Fragment>
      
    );
  }
}

export default App;
