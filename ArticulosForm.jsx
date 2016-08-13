import React, {Component} from 'react';

export default class ArticulosForm extends Component {

    addArticulo (event){
      event.preventDefault();
      var codigo = this.refs.codigo.value.trim();
      var text = this.refs.articulo.value.trim();
      if (codigo != "" & text !="") {
        Articulos.insert({
          codigo: codigo,
          descripcion: text,
          createdAt: new Date()
        });
        this.refs.codigo.value = "";
        this.refs.articulo.value = "";
      }
    }

  render() {
    return (
      <form className="new-articulo" onSubmit={this.addArticulo.bind(this)}>
        <input
          type="text"
          ref="codigo"
          placeholder="Codigo" />
        <input
          type="text"
          ref="articulo"
          placeholder="Descripcion"/>
       <button type="submit">Submit</button>
      </form>
    )
  }
}
