import React from 'react';
import Message from './Message.jsx'

var MessagesList = React.createClass({
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
        <Message message={messages}/>
      );
    });

    return(
      <div>{messageNodes}</div>
    );
  }
});

export default MessagesList;