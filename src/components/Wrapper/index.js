import React from 'react';
import {connect} from 'react-redux';
import {Container, Row} from 'reactstrap';
import Header from '../Header'
import './Wrapper.scss'

const Wrapper = ({children}) => {
  return (
    <Container>
      <Header/>
      <Row>
        {children}
      </Row>
    </Container>
  );
};

export default connect(state => (state))(Wrapper);