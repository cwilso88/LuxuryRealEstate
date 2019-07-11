import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import realEstate from './realEstate';


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Chasity'
        }
    }
    render () {
        return (
        <Router>
            <header>
                <div className="logo">
                    <img src="../../img/logo.png" alt="luxuryhomes"/>
                </div>
                    <nav>
                        <Link to="/advertise">Advertise</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/login">Log In</Link>
                        <Link to="/register" className="register-btn">Register</Link>
                    </nav>
            </header>
        </Router>
        )
    }
}

