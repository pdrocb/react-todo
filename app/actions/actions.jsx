import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/index';

export var setSearchText = (searchText) => {
  return {
      type: 'SET_SEARCH_TEXT',
      searchText
  };
};

// Toggle showCompleted
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  // First we save the data to Firebase
  return (dispatch, getState) => {
    var todo = {
      // id: uuid(), We don't need the ID anymore because is gonna be added by Firebase
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    // Firebase promise, when the fb database gets updated we dispatch a regular action that updates our view
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    var todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot) => {
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todosId) => {
        parsedTodos.push({
          id: todosId,
          ...todos[todosId]
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

// We installed thunk so we can return functions
// this let us do asyncronous actions and dispatch asyncronous ones
export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
      var todoRef = firebaseRef.child(`todos/${id}`);
      var updates = {
        completed,
        completedAt: completed ? moment().unix() : null
      };

      // Returning the promise let us chain on to then inside of our test
      return todoRef.update(updates).then(() => {
        dispatch(updateTodo(id, updates));
      });
  };
};
