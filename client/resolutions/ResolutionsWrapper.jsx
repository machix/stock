import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ResolutionsForm from './ResolutionsForm.jsx'
import ResolutionSingle from './ResolutionSingle.jsx'

import ArticulosForm from '../articulos/ArticulosForm.jsx'
import ArticuloSingle from '../articulos/ArticuloSingle.jsx'

Resolutions = new Mongo.Collection("resolutions");
//Articulos = new Mongo.Collection("articulos");

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        resolutions: Meteor.subscribe("userResolutions"),
        articulos: Meteor.subscribe("allArticulos")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
    this.state.subscription.articulos.stop();
  }

  resolutions() {
    return Resolutions.find().fetch();
  }

  articulos() {
    return Articulos.find().fetch();
  }


  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}
        >
        <h1>Articulos - {Session.get('test')}</h1>
        <ResolutionsForm />
        <ReactCSSTransitionGroup
          component="ul"
          className="resolutions"
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}
          >
          {this.resolutions().map( (resolution)=>{
            return <ResolutionSingle key={resolution._id} resolution = {resolution}/>
          })}
          </ReactCSSTransitionGroup>

        <ArticulosForm />
        <ul className="articulos">
        {this.articulos().map( (articulo)=>{
          return <ArticuloSingle key={articulo._id} articulo = {articulo}/>
        })}
        </ul>
      </ReactCSSTransitionGroup>
    )
  }
}
