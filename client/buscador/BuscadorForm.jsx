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
      <Buscador2 />
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
