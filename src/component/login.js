import React, { Component } from 'react'
import fakeAuth from './fakeAuth';
import {Redirect} from 'react-router-dom'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        }
        
    }
    login = () => {
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
      }
      render() {
        
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state
        //console.log(this.props.location.state);
        if (redirectToReferrer === true) {
            console.log(from);
          return <Redirect to={from} />
        }
    
        return (
          <div>
            <p>You must log in to view the page</p>
            <button onClick={this.login}>Log in</button>
          </div>
        )
      }
}
