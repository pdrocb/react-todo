var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todoText', () => {
    var todoText = 'New Todo Task';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    /*
    We need to manipulate the value in the input field, over on countdownForm we have a ref="seconds"
    */

    addTodo.refs.todoText.value = todoText; // We set the value

    //We need to simulate the submit passing the DOM node
    // with jQuery we are pulling out the first DOM node
    TestUtils.Simulate.submit($el.find('form')[0]); // We simulate the form submit

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should not dispatch ADD_TODO when invalid todoText', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    /*
    We need to manipulate the value in the input field, over on countdownForm we have a ref="seconds"
    */

    addTodo.refs.todoText.value = todoText; // We set the value

    //We need to simulate the submit passing the DOM node
    // with jQuery we are pulling out the first DOM node
    TestUtils.Simulate.submit($el.find('form')[0]); // We simulate the form submit

    expect(spy).toNotHaveBeenCalled();
  });
});
