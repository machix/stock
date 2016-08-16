import React, {Component} from 'react';

export default class ArticuloSingle extends Component {

  render() {
    return (
      <li>
        {this.props.articulo.codigo} - 
        {this.props.articulo.descripcion}
      </li>
    )
  }
}
