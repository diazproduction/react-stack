import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

var Channel = React.createClass({
  render() {
    return(
      <ListItem>{this.props.channel}</ListItem>
    );
  }
});

export default Channel;