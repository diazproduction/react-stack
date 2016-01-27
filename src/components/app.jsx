import React from 'react';
import MessagesList from './MessagesList.jsx';
import AppBar from 'material-ui/lib/app-bar';

var App = React.createClass({

  render() {
    return(
      <div>
        <AppBar
          title="Let's Start!"
        />
        <MessagesList />
      </div>
    );
  }
});

export default App;