import React, { Component } from 'react';
import API from '../utils/API';

class Bid extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: [],
      search: ""
    }
  }

  componentDidMount() {
    this.displayData();
  }

  displayData = query => {
    API.search(query).then(res => {
      this.setState({
        results: res.data.results
      })
    }).catch(err => console.log(err));
  }


}

export default Bid;