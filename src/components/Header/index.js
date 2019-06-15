import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import LoginPopover from './LoginPopover'
import './Header.scss'

function Header  ({ user }) {
  console.log(user);
  return (

    <Row noGutters>
      <Col>

        <NavLink to="/" exact className="head_link">
          Main
        </NavLink>

        <NavLink to="/table" exact className="head_link">
          Champion Table
        </NavLink>


        <NavLink to="/users" exact className="head_link">
          Users
        </NavLink>

      </Col>
      <Col>

        {user ?
          <h5 className=" to_right">User Info</h5>
          :
          <LoginPopover/>
        }

      </Col>
    </Row>
  );
};

export default connect(state => ({
  user:state.user,
}),

  )(Header);