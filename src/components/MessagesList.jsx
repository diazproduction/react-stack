import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

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
      <Card className="c-messages-list">
        <List>{messageNodes}</List>
      </Card>
    );
  }
});

export default MessagesList;