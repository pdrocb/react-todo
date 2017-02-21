var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('Should call onAddTodo if valid string entered', () => {
    var todoText = 'New Todo Task';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    /*
    We need to manipulate the value in the input field, over on countdownForm we have a ref="seconds"
    */

    addTodo.refs.todoText.value = todoText; // We set the value

    //We need to simulate the submit passing the DOM node
    // with jQuery we are pulling out the first DOM node
    TestUtils.Simulate.submit($el.find('form')[0]); // We simulate the form submit

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('Should not call onAddTodo if invalid string entered', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
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
