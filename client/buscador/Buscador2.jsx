import React, {Component} from 'react';

import searchBar from './searchBar.jsx';

export default class Buscador2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText:""
    }
  }

handleUserInput(filterText) {
  this.setState({
    filterText: filterText
  });
}


  render() {
    return(
      <searchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
    )
  }
}
