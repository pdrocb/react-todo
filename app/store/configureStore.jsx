var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todoReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchTex: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todoReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
