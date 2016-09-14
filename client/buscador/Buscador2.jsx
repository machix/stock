import React, {Component} from 'react';

import SearchBar from './SearchBar.jsx';

export default class Buscador2 extends Component {
  constructor() {
    super();

    this.state = {
      filterText:"",
    }
  }

handleUserInput(filterText) {
  this.setState({
    filterText: filterText
  });
}



  render() {
    console.log(this.state.filterText);
    return(
      <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
    )
  }
}
