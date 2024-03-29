import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Row, Col} from 'reactstrap';
import Game from './Game'

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className='col'>
            <div className='d-flex justify-content-center'>
            <Game/>
            </div>
          </div>
        </Row>

        <br/>
        <Row className='text-center'>
          <Col>
            <Button color="success"> Start Game</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(Dashboard);
