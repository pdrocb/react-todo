var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do smt'
    }, {
      id: 2,
      text: 'Do smt2'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    // Is gonna let us check how many of a given component are render on a separed component
    // in this case we wanna check how many todo components are rendered under todolist component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
