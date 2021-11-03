// import React, { Component } from 'react';
// import HeaderSection from "./components/HeaderSection";
// import FAQ from "./components/FAQ";
// import Schedule from "./components/Schedule";
// //import headerBackground from "./Assets/backgrounds/Header_Section_Background.svg";
// import './App.css';
// import {Countdown,About} from './components';
// import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       HackDate: 'Feb 9, 2020 21:00:00'
//     }
//   }

//   // render() {
//   //   return (
//   //     <Router>
//   //       <div className = "App" >
//   //             <Countdown HackDate = {this.state.HackDate} />
//   //             <Switch>
//   //               <Route key="home" path="/" exact strict render={() => (
//   //                 <HeaderSection signUpConfirmation={false}/>   
//   //                 )}/>/>
//   //               <Route key="finishSignUp" path="/confirm" exact strict render={() => (
//   //                 <HeaderSection signUpConfirmation={true}/>   
//   //                 )}/>/>
//   //             </Switch>
//   //             <About/>
//   //             <FAQ/>
           
//   //           { /*<Schedule/>*/}
//   //       </div>
//   //       {/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/}
//   //       <script src="/__/firebase/7.6.2/firebase-app.js"></script>

//   //       {/*<!-- TODO: Add SDKs for Firebase products that you want to use. https://firebase.google.com/docs/web/setup#available-libraries -->*/}
//   //       <script src="/__/firebase/7.6.2/firebase-analytics.js"></script>

//   //       {/*<!-- Initialize Firebase -->*/}
//   //       <script src="/__/firebase/init.js"></script>
//   //       </Router>
      
//   //   );
//   // }

//   render() {
//     return (
//       <root>
//         <div className = "App" >
//           <section>
//             <Countdown HackDate = {this.state.HackDate} />
//             <HeaderSection/>
//             <About/>
//             <FAQ/>

//             { /*<Schedule/>*/}
//           </section>
//         </div>
//         {/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/}
//         <script src="/__/firebase/7.6.2/firebase-app.js"></script>

//         {/*<!-- TODO: Add SDKs for Firebase products that you want to use. https://firebase.google.com/docs/web/setup#available-libraries -->*/}
//         <script src="/__/firebase/7.6.2/firebase-analytics.js"></script>

//         {/*<!-- Initialize Firebase -->*/}
//         <script src="/__/firebase/init.js"></script>
//       </root>
//     );
//   }
// }

// export default App;


  
import React, { Component } from 'react';
import HeaderSection from "./components/HeaderSection";
import SponsorshipSection from "./components/SponsorshipSection";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
import TracksSection from "./components/TracksSection";
import DevpostButton from "./components/DevpostButton";
//import headerBackground from "./Assets/backgrounds/Header_Section_Background.svg";
import './App.css';
import {Countdown,About} from './components';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      HackDate: 'Feb 7, 2020 19:00:00'
    }
  }

  render() {
    return (
      
      <Router>
            <root>
              
            <DevpostButton/>
      <div class="parallax">
        
        <div class="parallax__layer parallax__layer--far"></div>
        <div class="parallax__layer parallax__layer--close"></div>

              <div className = "App" >
                
                {/*<Countdown HackDate = {this.state.HackDate} />*/}
                <Switch>
                  <Route key="home" path="/" exact strict render={() => (
                      <HeaderSection key={Math.random()}  signUpConfirmation={false}/>   
                      )}/>
                  <Route key="finishSignUp" path="/confirm" render={({match}) => (
                      <HeaderSection key={Math.random()} signUpConfirmation={true}/>   
                      )}/>
                </Switch>
                <About/>
                <TracksSection/>
                <FAQ/>
                <Schedule/>
                {
                  //<SponsorshipSection/>
                }
              </div>

              {/*<!-- The core Firebase JS SDK is always required and must be listed first -->*/}
              <script src="/__/firebase/7.6.2/firebase-app.js"></script>

              {/*<!-- TODO: Add SDKs for Firebase products that you want to use. https://firebase.google.com/docs/web/setup#available-libraries -->*/}
              <script src="/__/firebase/7.6.2/firebase-analytics.js"></script>

              {/*<!-- Initialize Firebase -->*/}
              <script src="/__/firebase/init.js"></script>


              </div>

            </root>
          </Router>

        
      
    );
  }
}

export default App;
