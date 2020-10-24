import React, { Component } from 'react';
import './Footer.css';


export class Footer extends Component {

    static RenderFooter() {
        return (
            <>
                <nav className='footer'>
                    Footer
        </nav>
            </>
        );
    }

    render() {

        let contents = Footer.RenderFooter();

        return (
        <div>
            {contents}
        </div>
        );
    }
}

