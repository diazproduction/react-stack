import React from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

var ChannelsList = React.createClass({
  getInitialState() {
    return {
      channels: [
        'Splatoon',
        'Pokémon'
      ]
    }
  },

  render() {
    var channelNodes = this.state.channels.map((channels) => {
      return(
        <Channel channel={channels}/>
      );
    });

    return(
      <Card className="c-channels-list">
        <List>{channelNodes}</List>
      </Card>
    );
  }
});

export default ChannelsList;