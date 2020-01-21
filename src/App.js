import React, { Component } from 'react';
import HeaderSection from "./components/HeaderSection";
import SponsorshipSection from "./components/SponsorshipSection";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
//import headerBackground from "./Assets/backgrounds/Header_Section_Background.svg";
import './App.css';
import {Countdown,About} from './components';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      HackDate: 'Feb 9, 2020 21:00:00'
    }
  }

  render() {
    return (
      <root>
        <div className = "App" >
          <section>
            <Countdown HackDate = {this.state.HackDate} />
            <HeaderSection/>
            <About/>
            <FAQ/>

            { /*<Schedule/>*/}
            <SponsorshipSection/>
          </section>
        </div>
        {/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/}
        <script src="/__/firebase/7.6.2/firebase-app.js"></script>

        {/*<!-- TODO: Add SDKs for Firebase products that you want to use. https://firebase.google.com/docs/web/setup#available-libraries -->*/}
        <script src="/__/firebase/7.6.2/firebase-analytics.js"></script>

        {/*<!-- Initialize Firebase -->*/}
        <script src="/__/firebase/init.js"></script>
      </root>
    );
  }
}

export default App;
