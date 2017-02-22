var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('Should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      // compares the value of objects or array
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
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
});
