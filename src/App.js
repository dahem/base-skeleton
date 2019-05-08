import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import Home from 'views/Home';

import Theme from './theme';

moment.defaultFormat = 'YYYY-MM-DD';
moment.locale('pt-BR');

const App = () => (
  <Provider store={store}>
    <Theme>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={() => (<div>about</div>)} />
        </Switch>
      </BrowserRouter>
    </Theme>
  </Provider>
);

export default App;
