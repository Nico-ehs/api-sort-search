import React, { Component} from 'react';
import ApiCallButton from './components/ApiCallButton';
import DisplayTable from './components/DisplayTable';
import SearchBar from './components/SearchBar';
import Navbar from 'react-bootstrap/Navbar'

// import logo from './logo.svg';
import './App.css';
const sortIcons = {false:'▼', true:'▲'}
const ApiUrl = "https://programming-quotes-api.herokuapp.com/quotes"
// [{"_id":"5a6ce86e2af929789500e7e4","sr":"Računarska nauka se tiče računara koliko i astronomija teleskopa.",
// "en":"Computer Science is no more about computers than astronomy is about telescopes.",
// "author":"Edsger W. Dijkstra","source":null,
// "numberOfVotes":16,"rating":3.5,"addedBy":"5ab04d928c8b4e3cbf733557","id":"5a6ce86e2af929789500e7e4"}]

class App extends Component {
  

  
  state = {
    isLoading: null,
    fullData: null,
    searchData: null,
    displayData: null,
    searchInput: null,
    sortBy: null,
    sortReverse: false,
    authorSortIcon: '',
    quoteSortIcon: ''
  }
  
  
  apiCall = () => {
    fetch(ApiUrl)
      .then(response => response.json())
      .then(this.loadData)
  }
  
  loadData = (data) => {
    this.setState({fullData: [...data]})
    this.setState({searchData: [...data]})
    this.setState({displayData: [...data]})
    console.log(this.state.displayData.slice(0,5))
  }
  
  setSearch = (input) => {
    if (!this.state.fullData){
      return null
    }
    this.setState({searchData: [...this.state.fullData].filter(quote => quote.author.includes(input.searchTerm) || quote.en.includes(input.searchTerm) )})
    this.sortFilteredData()
  }
  
  
  sortFilteredData = () => {
    if(this.state.sortBy){
      this.setState({displayData: [...this.state.searchData].sort((a, b) => ((a[this.state.sortBy] > [this.state.sortBy])) ? 1 : -1)})
    }else{
      this.setState({displayData: [...this.state.searchData].sort((a, b) => ((a['author'] > ['author'])) ? 1 : -1)})
    }
    if (this.state.sortReverse){
      this.setState({displayData: [...this.state.displayData].reverse()})
    }
  }
  
  setSort = (input) => {

    if (this.state.sortReverse || input !== this.state.sortBy){
      this.setState({sortReverse: false})
    }else{
      this.setState({sortReverse: true})
    }
    this.setState({sortBy: input})
    this.sortFilteredData()
  }

  genIcon = (input) => {
    if (this.state.sortBy===input){
      return sortIcons[this.state.sortReverse]
    }else{
      return ''
    }
  }
  
  
  
  render() {
    
    return (
      <div className="App">
        <h4>This is a quick app that shows quotes on programming from "https://programming-quotes-api.herokuapp.com/quotes". Text can be entered in the search box to filter for results with the string in either the authors name or the quotes’s text. Quote and author can each be clicked to sort the data by that category. Clicking the category again will swap the order between ascending and descending. </h4>
        <Navbar bg="light" expand="lg">
          <ApiCallButton apiCallFn={this.apiCall} />
          <SearchBar setSearch={this.setSearch} />
        </Navbar>
        <DisplayTable displayData={this.state.displayData} setSort={this.setSort} 
        authorSortIcon={this.genIcon('author')} quoteSortIcon={this.genIcon('en')} />
      </div>
    );
  }
}
export default App;
