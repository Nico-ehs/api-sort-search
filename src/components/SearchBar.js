
import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
// import Navbar from 'react-bootstrap/lib/Navbar'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'
// import Nav from 'react-bootstrap/lib/Nav'
// import {Link} from 'react-router-dom'

class SearchBar extends Component {

  state = {
    searchTerm: "",
  };


  searchUpdate = (event) => {
    console.log(this.state)
    // debugger
    event.preventDefault()
    this.props.searchFn({ "search": this.state.searchTerm })
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.id] = e.target.value
    this.setState(change)
  };

  render() {
    const isLoading = false
    return (
      <div>
        <Form onSubmit={this.loginSubmit} >
          <Form.Group controlId="searchTerm">
            <Form.Label>Search</Form.Label>
            <Form.Control placeholder="" name="searchTerm" onChange={this.handleChange}/>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;