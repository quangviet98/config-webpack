import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
const fakeAuth = require('./fakeAuth')

export const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(fakeAuth.isAuthenticated)
    return (
        <Route {...rest} render={(props) => (
            fakeAuth.isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                     
                  }} />
        )}/>
    )

}

