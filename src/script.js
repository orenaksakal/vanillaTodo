var todoApp = {
    todos: [],

    displayTodos: function () {
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

    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        view.displayTodos();
    },

    changeTodo: function (todoPos, todoText) {
        this.todos[todoPos].todoText = todoText;
        view.displayTodos();
    },

    deleteTodo: function (todoPos) {
        this.todos.splice(todoPos, 1);
        this.displayTodos();
    },

    toggleAll: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //get the completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed == true) {
                completedTodos++;
            }
        }
        // if all is true, make all false
        if (totalTodos == completedTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;

            }
        }
        this.displayTodos();
    },
    toggleTodo: function (todoPos) {
        var todo = this.todos[todoPos];
        todo.completed = !todo.completed;
        this.displayTodos();
    }

};

var handlers = {
    displayTodos: function () {
        todoApp.displayTodos();
    },

    toggleAll: function () {
        todoApp.toggleAll();
    },

    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');

        todoApp.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },

    changeTodo: function () {
        var changeTodoPosInput = document.getElementById('changeTodoPosInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');

        todoApp.changeTodo(changeTodoPosInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosInput.value, changeTodoTextInput.value = '';


    },

    deleteTodo: function () {
        var deleteTodoPosInput = document.getElementById('deleteTodoPosInput');
        todoApp.deleteTodo(deleteTodoPosInput.valueAsNumber);

    },

    toggleTodo: function () {
        var toggleTodoPosInput = document.getElementById('toggleTodoPosInput');
        todoApp.toggleTodo(toggleTodoPosInput.valueAsNumber);
    }

}

  var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML= '';
        for (var i =0; i < todoApp.todos.length; i++){
            var todoLi = document.createElement('li');
            todoLi.textContent = todoApp.todos[i].todoText;
            todosUl.appendChild(todoLi);
        }
    }
  };
