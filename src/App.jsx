import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createComponentStore, createAppStore } from './store';


/*** Containers */

import { AlertsContainer } from './modules/alerts/containers';


/*** Stores */

const componentStore = window.componentStore = createComponentStore();
const appStore = createAppStore();


/*** Components */

import NotificationComponent from './components/notification/NotificationComponent';


/*** Component Registry */

const componentRegistry = {
  NotificationComponent,
};


/*** Initialize standalone components via DOM */

$(() => {
  const reactComponents = $('[data-react-component]');
  $.each(reactComponents, (index, el) => {
    const $el = $(el);
    const props = $el.data();
    const Component = componentRegistry[props.reactComponent];

    if (Component) {
      ReactDOM.render(
        <Provider store={componentStore}>
          <Component {...props} />
        </Provider>,
        el
      )
    }
  });
});


/*** Initialize React Containers */

ReactDOM.render(
  <Provider store={appStore}>
    <Router history={browserHistory}>
      <Route path="/" component={AlertsContainer} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
