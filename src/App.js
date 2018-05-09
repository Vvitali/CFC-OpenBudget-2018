import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import HomeRoute from './routes/home';
import Footer from './components/footer/footer.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//home route
const Home = () => (
  <div>
  <h2>Home</h2>
  </div>
  )



class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      
      <Router>
      <div>
      <Route exact path="/" component={HomeRoute}/> 
      </div>
      </Router> 
      <Footer />
      </div>
      );
  }
}

export default App;
