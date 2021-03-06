import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createStore from './store';


/*** Containers */

import { AlertsContainer } from './modules/alerts/containers';


/*** Events */

import emitter from './services/eventEmitter';
window.eventEmitter = emitter;


/*** Components */

import components from './components';
window.components = components;


/*** Store */

const store = createStore();


/*** Initialize standalone components via DOM */

$(() => {
  const reactComponents = $('[data-react-component]');
  $.each(reactComponents, (index, el) => {
    const $el = $(el);
    const props = $el.data();
    const Component = components[props.reactComponent];

    if (Component) {
      ReactDOM.render(
        <Component {...props} />,
        el
      )
    }
  });
});


/*** Initialize React Containers */

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AlertsContainer} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
