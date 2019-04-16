import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
       <Navbar />
       <Route exact path ='/' component={Home} />
       <Route path ='/about' component={About} />
       <Route path ='/news' component={News} />
     </div>
     </BrowserRouter>
    );
  }
}

export default App;
