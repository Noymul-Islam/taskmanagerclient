import React, { Component } from 'react';
import { Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';

const NavBar = ({ navigations }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            navigations.map(item=>
                                <NavLink className= "nav-item nav-link"
                                key={item.Name}  to= {item.Route}  >{item.Name}</NavLink>
                            )
                        }

                    </div>
                </div>
            </nav>
        </div>
    );

}


export default NavBar;