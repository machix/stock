import React, {Component} from 'react';

export default class searchBar extends Component {

  constructor() {
    super();
  }

  handleChange () {
    this.props.onUserInput(this.refs.filterTextInput.value)
  }

  render() {
    return(
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />
      </form>
    )
  }
}
