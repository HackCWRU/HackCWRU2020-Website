import React, { Component } from 'react';
import HeaderSection from "./components/HeaderSection";
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
      <div className = "App" >
        <section className = "introduction">
          <Countdown HackDate = {this.state.HackDate} />
          <HeaderSection/>
          <About/>
          <FAQ/>
          <Schedule/>
        </section>
      </div>
    );
  }
}

export default App;
