import React, { Component} from 'react';
import ApiCallButton from './components/ApiCallButton';
import DisplayTable from './components/DisplayTable';
import SearchBar from './components/SearchBar';
import Navbar from 'react-bootstrap/Navbar'

import logo from './logo.svg';
import './App.css';


const ApiUrl = "http://localhost:3000/"


class App extends Component {
  
  
  state = {
    isLoading: null,
    fullData: null,
    displayData: null,
    searchInput: null,
    sortBy: null
  }
  
  
  apiCall = () => {
    console.log("test1")
  }
  
  loadData = (data) => {
    this.setState({categories: data})
  }
  
  searchFilter = (input) => {
    // debugger
  }
  
  setSort = (input) => {
    // debugger
  }

  setSearch = (input) => {
    // debugger
  }
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <ApiCallButton apiCallFn={this.apiCall} />
          <SearchBar searchFn={this.searchFn} />
        </Navbar>
      </div>
    );
  }
}
export default App;
