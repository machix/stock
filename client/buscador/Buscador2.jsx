import React, {Component} from 'react';

import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

export default class Buscador2 extends Component {
  constructor() {
    super();

    this.state = {
      filterText:"",
      inStockOnly: false
    }
  }

handleUserInput(filterText, inStockOnly) {
  this.setState({
    filterText: filterText,
      inStockOnly: inStockOnly
  });
}



  render() {
    return(
      <div>
      <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
          inStockOnly={this.state.inStockOnly}
        />
      <ProductTable products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
           />
      </div>
    )
  }
}
