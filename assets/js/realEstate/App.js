import React, { Component } from 'react';
import realEstate from './realEstate';
import Header from './Header';
import AboutUs from './AboutUs'
import Login from './Login'
import Advertise from './Advertise'
import Register from './Register'
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <realEstate />
            </div>
        )
    }
}


