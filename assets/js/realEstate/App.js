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
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/about" component={AboutUs}></Route>
                        <Route exact path="/advertise" component={Advertise}></Route>
                        <Route exact path="/register" component={Register}></Route>
                        <Route exact path="/" component={realEstate}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}


