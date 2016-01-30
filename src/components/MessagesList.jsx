import React from 'react';
import Firebase from 'firebase';
import {keys, map, clone} from 'lodash';

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
      var messagesVal = dataSnapshot.val();
      var messages = _(messagesVal)
        .keys()
        .map((messagesKey) => {
          var cloned = _.clone(messagesVal[messagesKey]);
          cloned.key = messagesKey;
          return cloned;
        }).value();
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