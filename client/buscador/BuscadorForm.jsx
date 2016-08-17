import React, {Component} from 'react';

export default class BuscadorForm extends Component {

  buscar (event){
    event.preventDefault();
    var text = this.refs.buscador.value.trim();

    if(text) {
      Meteor.call('buscar',text, (error, data)=> {
        if(error) {
          Bert.alert('No esta Logueado','danger','fixed-top','fa-frown-o')
        } else {
        
        }

      });
    }

  }

  render() {
    return (
      <form className="new-resolution" onChange={this.buscar.bind(this)}>
      <input
      type="text"
      ref="buscar"
      placeholder="Buscar..." />
      </form>
    )
  }
}
