/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import { counterApp } from './reducers';

function configureStore(): Store {
  const store: Store = createStore(counterApp);
  return store;
}

const store: Store = configureStore();

class Main extends React.Component<{}, {}> {
  public render(): React.ReactElement<Provider> {
    return (<Provider store={store}>
      <App />
    </Provider>);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
