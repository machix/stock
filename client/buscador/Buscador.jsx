import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BuscadorForm from './BuscadorForm.jsx';

export default class Buscador extends Component {
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
        <h1>Buscador</h1>
        <BuscadorForm />
      </ReactCSSTransitionGroup>
    )
  }
}
