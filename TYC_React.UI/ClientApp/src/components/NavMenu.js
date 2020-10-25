import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';

import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
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

            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <Link className="navLogo" onClick={this.setActiveMenuItem('home')} to="/">
                    Tyn y Coed Cottage
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav">
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
                </div>
            </nav>
        );
    }
}
