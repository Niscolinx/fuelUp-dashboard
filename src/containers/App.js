import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as actions from '../store/actions/burgerIndex'
import asyncComponent from '../components/hoc/asyncComponent'

import Layout from "../components/Layout/Layout"
import Aux from "../components/hoc/HigherOrder"
import Home from './Home'
import { Route, Switch } from 'react-router-dom'


const asyncAuth = asyncComponent(() => {
  return import('../containers/Auth')
})

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token')) {
     // this.props.onCheckState(localStorage.getItem('token'), localStorage.getItem('userId'))
    }
  }

  
  render() {

    let AuthGuard = (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Auth/login' component={asyncAuth} />
        <Route path='/Auth/register' component={asyncAuth} />
        <Redirect to='/'/>
      </Switch>
    )
    if (this.props.auth) {
      AuthGuard = (
        <Switch>
          <Route path='/Auth/login' component={asyncAuth} />
          <Route path='/Auth/register' component={asyncAuth} />
          <Redirect to='/' />
        </Switch>

      )
    }
    return (
      <Aux>
        <Layout>
          {AuthGuard}
        </Layout>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.tokenId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckState: (tokenId, userId) => dispatch(actions.authSuccess(tokenId, userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
