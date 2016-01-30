import React from 'react';
import Card from 'material-ui/lib/card/card';

var MessageBox = React.createClass({
  render() {
    return(
      <Card className="c-message-box">
        <textarea className="c-message-box__textarea"/>
      </Card>
    );
  }
});

export default MessageBox;