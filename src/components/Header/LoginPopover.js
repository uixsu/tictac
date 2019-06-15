import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import {NavLink} from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
          <Button outline color="primary" className=" to_right" id="PopoverFocus" type="button" onClick={this.toggle}>
            Login
          </Button>
        <Popover trigger="focus" placement="bottom" isOpen={this.state.popoverOpen} target="PopoverFocus" toggle={this.toggle}>

          <PopoverBody>It will be login page for login or register user</PopoverBody>
        </Popover>
      </div>
    );
  }
}