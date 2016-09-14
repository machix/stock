import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  handleChange () {
    this.props.onUserInput(
      this.refs.filterTextInput.value.trim()
    )
  }

  render() {
    return(
      <div className="buscador">
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)} />
      </form>
      </div>
    )
  }
}
