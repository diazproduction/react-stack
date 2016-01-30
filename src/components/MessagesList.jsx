import React from 'react';
import Firebase from 'firebase';

import Message from './Message.jsx';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

var MessagesList = React.createClass({
  getInitialState() {
    return {
      messages: []
    };
  },

  componentWillMount() {
    this.firebaseRef = new Firebase("https://glaring-heat-810.firebaseio.com/messages");
    this.firebaseRef.once("value", (dataSnapshot)=> {
      var messages = dataSnapshot.val();
      this.setState({
        messages: messages
      });
    })
  },

  render() {
    var messageNodes = this.state.messages.map((messages) => {
      return(
        <Message
          message={messages.message}
          avatar={messages.avatar}
        />
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