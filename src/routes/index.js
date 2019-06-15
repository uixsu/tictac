import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import Dash from '../components/Dash'
import {connect} from 'react-redux';
import Stub from '../components/Stub'


export function MainRouter() {
  return (
    <BrowserRouter>

      <div>

        <Route path='/' component={Dash} exact/>
        <Route path='/table' component={Stub} exact/>
        <Route path='/users' component={Stub} exact/>

      </div>

    </BrowserRouter>
  )

}

export default connect(state => (state))(MainRouter);