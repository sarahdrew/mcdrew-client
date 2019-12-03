import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Nav from './Nav/Nav';
import Counter from './Counter/Counter';
import Home from './Home/Home';
import About from './About/About';
import Register from './Register/Register';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      matches: []
    }

    return (

      <div className='App' >
        <nav>
          <Nav />
          <Counter />
        </nav>
        <main className='App'>

          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />

        </main>
      </div>

    );

  }
}