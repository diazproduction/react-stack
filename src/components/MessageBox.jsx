import React from 'react';
import trim from 'trim';
import Card from 'material-ui/lib/card/card';
import Firebase from 'firebase';

var MessageBox = React.createClass({
  getInitialState(){
    return{
      message: ""
    }
  },

  componentWillMount(){
    this.firebaseRef = new Firebase("https://glaring-heat-810.firebaseio.com/messages");
  },

  onChange(evt) {
    this.setState({
      message: evt.target.value
    });
  },

  onKeyUp(evt){
    if(evt.keyCode === 13 && trim(evt.target.value) != "") {
      evt.preventDefault();

      this.firebaseRef.push({
        message: this.state.message
      });

      this.setState({
        message: ""
      });
    }
  },

  render() {
    return(
      <Card className="c-message-box">
        <textarea
          value={this.state.message}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          className="c-message-box__textarea"/>
      </Card>
    );
  }
});

export default MessageBox;