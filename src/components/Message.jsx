import React from 'react';

import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

var Message = React.createClass({
  render() {
    return(
      <ListItem
        leftAvatar = {<Avatar src={this.props.avatar}/>}
      >{this.props.message}</ListItem>
    );
  }
});

export default Message;