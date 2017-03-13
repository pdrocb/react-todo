var $ = require('jQuery');

module.exports = {
  
  filteredTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    // Wie will return items that have completed false but if showcompleted is check we're gonna return all
    filteredTodos = filteredTodos.filter((todo) => {
      // if true the current item gonna stay in the array
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    /*
    sort modifies the current array, takes one argument which is a fn
    if return -1 we are telling a should come before b
    if we return 1 we are telling that b should come before a
    if return 0 it's gonna be no change
    */
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
