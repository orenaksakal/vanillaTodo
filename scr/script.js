var todoApp = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length == 0) {
      console.log('NO TODOS HERE');
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });

    this.displayTodos();
  },
  changeTodo: function(todoPos, todoText) {
    this.todos[todoPos].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(todoPos) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    //get the completed todos
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed == true){
      
      completedTodos++;
      }
    }
    // if all is true, make all false
      if(totalTodos == completedTodos){
        for(var i = 0; i< totalTodos; i++){
          this.todos[i].completed = false;
        }
      }else{
        for(var i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;

      }
    }
                  this.displayTodos();

    
  },
  toogle: function(todoPos) {
    var todo = this.todos[todoPos];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

};

// display todos button

var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function(){
  todoApp.displayTodos();
});

// toggle all button

var toggleTodosButton = document.getElementById('toggleAllButton');
toggleTodosButton.addEventListener('click', function(){
  todoApp.toggleAll();
});











