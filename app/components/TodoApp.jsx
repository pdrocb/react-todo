import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

// This export the unconnected version so we can use it in our test
export var TodoApp = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props
    e.preventDefault(); // since we are dealing with an anchor tag here

    dispatch(actions.startLogout());
  },
  render () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// This is for connect redux state to props
export default Redux.connect()(TodoApp);
