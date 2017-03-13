var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filtered todos', () => {
    var todos = [{
      id: 1,
      text: 'some text',
      completed: true
    }, {
      id: 2,
      text: 'text 02',
      completed: false
    }, {
      id: 3,
      text: 'some text 03',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return the items that have been completed', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filteredTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

  });
});
