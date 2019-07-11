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
        return (<header>
            <div className="logo">
                <img src="../../img/logo.png" alt="luxuryhomes"/>
            </div>
                <nav>
                    <a href="#">Advertise</a>
                    <a href="/about">About Us</a>
                    <a href="#">Log In</a>
                    <a href="#" className="register-btn">Register</a>
                </nav>
            </header>)
    }
}

