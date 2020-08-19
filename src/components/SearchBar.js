
import React, { Component } from 'react';
import { Form } from "react-bootstrap";
// import Navbar from 'react-bootstrap/lib/Navbar'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'
// import Nav from 'react-bootstrap/lib/Nav'
// import {Link} from 'react-router-dom'

class SearchBar extends Component {

  // searchUpdate = () => {
  //   this.props.searchFn({ "searchInput": this.state.searchTerm })
  // }

  searchUpdate = (e) => {
    let change = {}
    change[e.target.id] = e.target.value
    this.props.setSearch(change)
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="searchTerm">
            <Form.Label>Search</Form.Label>
            <Form.Control placeholder="" name="searchTerm" onChange={this.searchUpdate}/>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;