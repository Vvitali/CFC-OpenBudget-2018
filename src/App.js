import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import HomeRoute from './routes/home';//home route
import VisualizationRoute from "./routes/visualization";
import Footer from './components/footer/footer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      
      <Router>
      <div>
      <Route exact path="/" component={HomeRoute}/> 
      <Route path="/visualization" component={VisualizationRoute}/> 
      
      </div>
      </Router> 
      <Footer />
      </div>
      );
  }
}

export default App;
