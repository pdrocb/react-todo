var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip shoComplete status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'something to do',
          completed: false,
          createdAt: 92384275
        }
      };

      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todoReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
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
      var res = reducers.todoReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });

  describe('authReducer', () => {
    it('Should store uid on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: 'abc123'
      };
      //DF works to know if the value is changed inside the funcion
      // should not be changed because reducers are pure functions
      const res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('Should wipe auth on LOGOUT', () => {
      const authData = {
        uid: 'abc123'
      };
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });
});
