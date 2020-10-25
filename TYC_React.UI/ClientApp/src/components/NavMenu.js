import React, { Component, useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;   

  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true
      };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }

    render() {

        return (

        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">TYC</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                    <NavLink tag={Link} className='text-dark-selected' to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/local_area">Local Area</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/location">Location</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/places_to_go">Places To Go</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/tariffs">Tariffs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/reviews">Reviews</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/gallery">Gallery</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className='text-dark' to="/contact_us">Contact_Us</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
