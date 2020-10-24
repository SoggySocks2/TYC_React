import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../custom.css'
import { NavMenu } from './NavMenu';
import { Sidebar } from './Sidebar';
import { Home } from './Home';
import { AboutUs } from './AboutUs';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (

          <Router>
              <NavMenu />
              <header>Header</header>
              <div className="mainContainer">
                  <Sidebar />
                  <main className="main">
                      <Switch>
                          <Route path='/' exact component={Home} />
                          <Route path='/aboutus' component={AboutUs} />
                      </Switch>
                  </main>
              </div>
              <Footer />
          </Router>
    );
  }
}
