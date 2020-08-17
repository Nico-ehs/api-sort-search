import React, { Component} from 'react';
import ApiCallButton from './components/ApiCallButton';
import DisplayTable from './components/DisplayTable';
import SearchBar from './components/SearchBar';
import Navbar from 'react-bootstrap/Navbar'

// import logo from './logo.svg';
import './App.css';


const ApiUrl = "https://programming-quotes-api.herokuapp.com/quotes"
// [{"_id":"5a6ce86e2af929789500e7e4","sr":"Računarska nauka se tiče računara koliko i astronomija teleskopa.",
// "en":"Computer Science is no more about computers than astronomy is about telescopes.",
// "author":"Edsger W. Dijkstra","source":null,
// "numberOfVotes":16,"rating":3.5,"addedBy":"5ab04d928c8b4e3cbf733557","id":"5a6ce86e2af929789500e7e4"}]

class App extends Component {
  
  
  state = {
    isLoading: null,
    fullData: null,
    displayData: null,
    searchInput: null,
    sortBy: 'author' ,
    sortOrder: a
  }
  
  
  apiCall = () => {
    console.log("test1")
    fetch(ApiUrl)
      .then(response => response.json())
      .then(this.loadData)
  }
  
  loadData = (data) => {
    this.setState({fullData: data})
    this.setState({displayData: data})
    console.log(this.state.fullData.slice(0,5))
  }
  
  searchFilter = (input) => {
    this.setState({displayData: this.state.fullData.filter(quote => quote)})
  }
  
  setSort = (input) => {
    // debugger
  }

  
  
  
  
  
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <ApiCallButton apiCallFn={this.apiCall} />
          <SearchBar searchFn={this.setSearch} />
        </Navbar>
        <DisplayTable displayData={this.state.displayData}/>
      </div>
    );
  }
}
export default App;
