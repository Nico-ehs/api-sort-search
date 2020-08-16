
import React, { Component } from 'react';
// import Button from 'react-bootstrap/lib/Button'
import Table from 'react-bootstrap/Table'



class DisplayTable extends Component {

  state={
    displayData: null,
    sortType: null
  }



  genTable = () => {
    console.log(this.state)
    if (!this.state.data){
      return null
    }
    // console.log(this.state.data)
    return this.state.displayData.map(row =>
      <tr key={row.id}>
        <td>{row.title}</td>
        <td>{row.description}</td>
        <td>{row.comments.length}</td>
      </tr>
      )
  }

  componentDidMount() {
    
  }

  render() {
    if (!this.state.displayData){
      return null
    }
    return (
      <div>
      <h1>{this.state.displayData.title}</h1>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>comments</th>
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