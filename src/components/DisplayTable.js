
import React, { Component } from 'react';
// import Button from 'react-bootstrap/lib/Button'
import Table from 'react-bootstrap/Table'



class DisplayTable extends Component {


  genTable = () => {
    if (!this.props.displayData){
      return null
    }
    // console.log(this.state.data)
    return this.props.displayData.map(quote =>
      <tr key={quote.id}>
        <td>{quote.author}</td>
        <td>{quote.en}</td>
      </tr>
      )
  }

  componentDidMount() {

  }
  
  
  
  
  render() {
    if (!this.props.displayData){
      return null
    }
    return (
      <div>
      <h1>{this.props.displayData.title}</h1>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => this.props.setSort('author')}>Author {this.props.authorSortIcon}</th>
            <th onClick={() => this.props.setSort('en')}>Quote {this.props.quoteSortIcon}</th>
          </tr>
        </thead>
        <tbody>
        {this.genTable()}
        </tbody>
        </Table>
      </div>
    )
  }
}

export default DisplayTable;