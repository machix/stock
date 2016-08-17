import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

  addResolution (event){
    event.preventDefault();
    var text = this.refs.resolution.value.trim();

    if(text) {
      Meteor.call('addResolution',text, (error, data)=> {
        if(error) {
          Bert.alert('Please Login Before Submitting','danger','fixed-top','fa-frown-o')
        } else {
          this.refs.resolution.value = "";
          Bert.alert( 'Resolution Inserted.', 'success', 'growl-top-right' ); 
        }

      });
    }

  }

  render() {
    return (
      <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
      <input
      type="text"
      ref="resolution"
      placeholder="Finish Meteor React" />
      </form>
    )
  }
}
