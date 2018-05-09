import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import NavBar from './components/navbar';
import HomeRoute from './routes/home';//home route
import VisualizationRoute from "./routes/visualization";//visualization route
import Footer from './components/footer/footer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



=======
import CFCLogo from './avatar-white.png';
>>>>>>> master

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
      <NavBar />
      
      <Router>
      <div>
      <Route exact path="/" component={HomeRoute}/> 
      <Route path="/visualization" component={VisualizationRoute}/> 
      
      </div>
      </Router> 
      <Footer />
=======
        <header className="App-header">
          <h1 className="App-title">Welcome to Open Budget Charlotte</h1>
          <img className="cfclogo" src={CFCLogo} alt="Code For Charlotte"/>
        </header>
        <p>Our goal is to show the open budget data for Charlotte, North Carolina.</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
>>>>>>> master
      </div>
      );
  }
}

export default App;
