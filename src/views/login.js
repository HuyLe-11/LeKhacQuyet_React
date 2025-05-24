import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn10 from '../components/sign-in10'
import './login.css'
import Navbar8 from '../components/navbar8'
import Footer4 from '../components/footer4'


const login = (props) => {
  return (
    <div className="home-container">
        <Helmet>
            <title>Login - Le Khac Quyet</title>
            <meta property="og:title" content="Login - Le Khac Quyet" />
        </Helmet>
        <Navbar8 rootClassName="navbar8-root-class-name"></Navbar8>

      <SignIn10
        action1={
          <Fragment>
            <span className="home-text1">Sign In</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text2">Create Account</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text3">
              Create an account to start receiving freebies and updates.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text4">Sign In</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="home-text5">New to our site?</span>
          </Fragment>
        }
        rootClassName="sign-in10root-class-name"
      ></SignIn10>
        <Footer4></Footer4>
    </div>
  )
}

export default login
