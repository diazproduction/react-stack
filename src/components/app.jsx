import React from 'react';
import MessagesList from './MessagesList.jsx';
import ChannelsList from './ChannelsList.jsx';
import MessageBox from './MessageBox.jsx';
import AppBar from 'material-ui/lib/app-bar';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme/theme.jsx';

var App = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  },

  render() {
    return(
      <div>
        <AppBar
          title="Let's Start!"
        />
        <div className="o-main-layout">
          <ChannelsList />
          <MessagesList />
        </div>
        <MessageBox />
      </div>
    );
  }
});

export default App;