import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
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
        <h1>About Us</h1>
        <p>Locavore lo-fi meh messenger bag. Vice truffaut retro deep v fingerstache shoreditch, four loko single-origin coffee lomo everyday carry cornhole banh mi meh. Butcher salvia waistcoat artisan. Jean shorts kinfolk banjo fingerstache salvia selfies. Hella small batch four loko shoreditch. Kitsch craft beer cliche mustache fixie cold-pressed, selvage pour-over ennui occupy. Sustainable typewriter tacos, sartorial letterpress heirloom skateboard chartreuse lumbersexual sriracha asymmetrical.</p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    )
  }

}
