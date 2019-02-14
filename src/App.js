import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';
import './App.css';

import NavBar from './app/navbar';
import Home from './app/home';
import Statistics from './app/statistics';
import AccountInfo from './app/account-info';
class App extends Component {
    state = {};
    navigations = [
        {
            "Name": "Home",
            "Route": "/home",
            "isClicked": true
        },
        {
            "Name": "Acount Info",
            "Route": "/account-info",
            "isClicked": false

        },
        {
            "Name": "Statistics",
            "Route": "/statistics",
            "isClicked": false

        },
    ]

    constructor() {
        super();
        this.state = { navigations: this.navigations };
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <NavBar navigations={this.state.navigations} />
                <div className="container padding-v-32">
                    <Switch>
                        <Route path="/home" component = {Home} />
                        <Route path="/account-info" component = {AccountInfo}/>
                        <Route  path="/statistics" component = {Statistics}/>
                        <Redirect from="/" to="/home"></Redirect>
                        <Redirect to="/not-found"/>
                    </Switch>

                </div>


            </div>
        );
    }
}

export default App;
