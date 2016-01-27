import React from 'react';

var App = React.createClass({
  getInitialState() {
    return {
      messages: [
        'Hello there! How are you?',
        'Fine, thanks! And you?'
      ]
    }
  },

  render() {
    var messageNodes = this.state.messages.map((messages) => {
      return(
        <div style={{color: 'black'}}>{messages}</div>
      );
    });

    return(
      <div>{messageNodes}</div>
    );
  }
});

export default App;