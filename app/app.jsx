var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    //This login the user and set the uid
    store.dispatch(actions.login(user.uid));

    //once we have uid we can now retrieve logged user todos
    store.dispatch(actions.startAddTodos());

    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

//Load foundation
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById('app')
);
