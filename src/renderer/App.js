import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import configureStore from './configure/configureStore';
import { createHashHistory } from 'history';

// Load application containers
import Framework from './containers/framework';

// Load UI framework CSS files

import 'semantic-ui-css/semantic.min.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import './App.css';

// Create redux store with history
const history = createHashHistory();
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Framework />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
