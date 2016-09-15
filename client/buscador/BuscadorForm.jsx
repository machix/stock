import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Buscador2 from './Buscador2.jsx';

export default class BuscadorForm extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      filterText2: "",
      subscription: {
        articulos: Meteor.subscribe("buscar","111")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.articulos.stop();
  }


  articulos() {
    return Articulos.find({codigo:this.state.filterText2}).fetch();
  }

  buscar (event){
    event.preventDefault();
    var text = this.refs.buscador.value.trim();
    this.setState({filterText2:text,});
   console.log(this.state.filterText2);

  }

  render() {
    let res = this.articulos();

    if(!res) {
      return <div>Loading...</div>
    }
    return (
      <div>
      <Buscador2 products={PRODUCTS}/>
      <form className="new-resolution" onSubmit={this.buscar.bind(this)} >
      <input
      type="text"
      ref="buscador"
      placeholder="Buscar..."
       />
      </form>
        <h1>{res.descripcion}</h1>

      </div>
    )
  }
}

var PRODUCTS = [
  {_id:'1', category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
{_id:'2', category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
{_id:'3', category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
{_id:'4', category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
{_id:'5', category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
{_id:'6', category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
