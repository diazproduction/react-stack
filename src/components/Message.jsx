import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

var Message = React.createClass({
  render() {
    return(
      <ListItem
        leftAvatar = {<Avatar src="https://scontent-lhr3-1.xx.fbcdn.net/hprofile-prn2/v/t1.0-1/c0.374.539.539/s320x320/10487224_10204084086282966_5864192538828848554_n.jpg?oh=a87f7107b45323be806c7a4cb041ffdc&oe=572DB696"/>}
      >{this.props.message}</ListItem>
    );
  }
});

export default Message;