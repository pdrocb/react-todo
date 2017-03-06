var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('Should toggle completed todos', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Study hard'
    };

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate ADD_TODOS action object', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 3300
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should toggle todo by id', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
