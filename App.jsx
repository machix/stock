import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm.jsx'
import ResolutionSingle from './ResolutionSingle.jsx'

import ArticulosForm from './ArticulosForm.jsx'
import ArticuloSingle from './ArticuloSingle.jsx'

Resolutions = new Mongo.Collection("resolutions");
Articulos = new Mongo.Collection("articulos");

export default class App extends TrackerReact(React.Component) {

  resolutions() {
    return Resolutions.find().fetch();
  }

  articulos() {
    return Articulos.find().fetch();
  }


  render() {
    let res = this.resolutions();
    let art = this.articulos();
    if(res.length < 1 || art.length < 1) {
      return (<div>Cargando...</div>)
    }
    return (
      <div>
        <h1>Articulos</h1>
        <ResolutionsForm />
        <ul>
          <ResolutionSingle resolution = {res[0]}/>
        </ul>

        <ArticulosForm />
        <ul>
        <ArticuloSingle articulo = {art[0]}/>
        </ul>
      </div>
    )
  }
}
