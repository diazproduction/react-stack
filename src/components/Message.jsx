import React from 'react';

var Message = React.createClass({
  render() {
    return(
      <div>{this.props.message}</div>
    );
  }
});

export default Message;