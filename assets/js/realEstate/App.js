import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RealEstate from './RealEstate';
import Header from './Header';
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Advertise from './pages/Advertise'
import Register from './pages/Register'
import RealEstate from './RealEstate';


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <section id="content-area">
                            <Route exact path="/" component={RealEstate}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/about" component={AboutUs}></Route>
                            <Route exact path="/advertise" component={Advertise}></Route>
                            <Route exact path="/register" component={Register}></Route>
                        </section>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;


