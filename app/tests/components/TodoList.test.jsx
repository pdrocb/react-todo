var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnedtedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do smt',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Do smt2',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    // Is gonna let us check how many of a given component are render on a separed component
    // in this case we wanna check how many todo components are rendered under todolist component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnedtedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('Should render empty message if no Todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
