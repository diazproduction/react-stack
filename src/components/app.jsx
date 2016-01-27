import React from 'react';
import MessagesList from './MessagesList.jsx';
import AppBar from 'material-ui/lib/app-bar';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../theme/theme.jsx';

var App = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },

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