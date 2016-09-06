import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class BuscadorForm extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      filterText: "",
      subscription: {
        articulos: Meteor.subscribe("buscar","111")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.articulos.stop();
  }

  articulos() {
    return Articulos.find({codigo:this.state.filterText}).fetch();
  }

  buscar (event){
    event.preventDefault();
    var text = this.refs.buscador.value.trim();
    this.setState({filterText:text,});
    console.log(this.state.filterText);

  }

  render() {
    let res = this.articulos();

    if(!res) {
      return <div>Loading...</div>
    }
    return (
      <div>
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
