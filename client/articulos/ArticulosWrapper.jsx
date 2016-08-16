import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ArticulosForm from '../articulos/ArticulosForm.jsx'
import ArticuloSingle from '../articulos/ArticuloSingle.jsx'

Articulos = new Mongo.Collection("articulos");

export default class ArticulosWrapper extends TrackerReact(React.Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("allArticulos")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.articulos.stop();
  }

  articulos() {
    return Articulos.find().fetch();
  }


  render() {
    return (
      <div>
        <h1>Articulos</h1>
        <ArticulosForm />
        <ul className="articulos">
        {this.articulos().map( (articulo)=>{
          return <ArticuloSingle key={articulo._id} articulo = {articulo}/>
        })}
        </ul>
      </div>
    )
  }
}
