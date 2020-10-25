import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends React.Component {

    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapsed: true
        };

        this.state = { activeMenuItem: "home" };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    setActiveMenuItem(menuItem) {
        return function () {
            this.setState({ activeMenuItem: menuItem });
        }.bind(this)
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
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'home' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('home')} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'local_area' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('local_area')} to="/local_area">Local Area</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'location' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('location')} to="/location">Location</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'places_to_go' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('places_to_go')} to="/places_to_go">Places To Go</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'tariffs' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('tariffs')} to="/tariffs">Tariffs</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'reviews' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('reviews')} to="/reviews">Reviews</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'gallery' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('gallery')} to="/gallery">Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className={this.state.activeMenuItem == 'contact_us' ? 'text-dark-selected' : 'text-dark'} onClick={this.setActiveMenuItem('contact_us')} to="/contact_us">Contact Us</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
