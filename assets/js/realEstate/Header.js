import React, {Component} from 'react';


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Chasity'
        }
    }
    render () {
        return (<header>
            <div className="logo">AtlantaLux Real Estate</div>

            <nav>
                <a href="#">Advertise</a>
                <a href="#">About Us</a>
                <a href="#">Log In</a>
                <a href="#" className="register-btn">Register</a>
            </nav>

            </header>)
    }
}

