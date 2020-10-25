import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../custom.css'
import { NavMenu } from './NavMenu';
import { Sidebar } from './Sidebar';
import { Home } from './Home';
import { Local_Area } from './Local_Area';
import { Location } from './Location';
import { Places_To_Go } from './Places_To_Go';
import { Tariffs } from './Tariffs';
import { Reviews } from './Reviews';
import { Gallery } from './Gallery';
import { Contact_Us } from './Contact_Us';
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
                          <Route path='/local_area' component={Local_Area} />
                          <Route path='/location' component={Location} />
                          <Route path='/places_to_go' component={Places_To_Go} />
                          <Route path='/tariffs' component={Tariffs} />
                          <Route path='/reviews' component={Reviews} />
                          <Route path='/gallery' component={Gallery} />
                          <Route path='/contact_us' component={Contact_Us} />                            
                      </Switch>
                  </main>
              </div>
              <Footer />
          </Router>
    );
  }
}
