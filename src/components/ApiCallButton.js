
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
// import Navbar from 'react-bootstrap/lib/Navbar'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'
// import Nav from 'react-bootstrap/lib/Nav'
// import {Link} from 'react-router-dom'

class ApiCallButton extends Component {

    render() {
        const isLoading =false
        return (
            <div>
      <Button variant="primary" disabled={isLoading} onClick={!isLoading ?  this.props.apiCallFn() : null}>
      Load Data
      </Button>
      </div>
        );
    }
}


export default ApiCallButton;