import React, { Component } from 'react';
import realEstate from './RealEstate';
import Header from './Header';
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Advertise from './pages/Advertise'
import Register from './pages/Register'
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


