
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
// import Navbar from 'react-bootstrap/lib/Navbar'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'
// import Nav from 'react-bootstrap/lib/Nav'
// import {Link} from 'react-router-dom'

class ApiCallButton extends Component {
    
    
    componentDidMount() {
    console.log("test3")
  }

    render() {
        const isLoading =false
        return (
            <div>
      <Button variant="primary" disabled={isLoading} onClick={this.props.apiCallFn}>
      Load Data
      </Button>
      </div>
        );
    }
}


export default ApiCallButton;