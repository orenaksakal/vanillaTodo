var todoApp = {
    todos: [],

    addTodo: function (todoText) {
        if (todoText == '' || todoText == null) {
            return;
        }
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
    },

    changeTodo: function (todoPos, todoText) {
        this.todos[todoPos].todoText = todoText;
    },

    deleteTodo: function (todoPos) {
        this.todos.splice(todoPos, 1);
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
        view.displayTodos();
    },
    toggleTodo: function (todoPos) {
        var todo = this.todos[todoPos];
        todo.completed = !todo.completed;
    }

};

var handlers = {
    toggleAll: function () {
        todoApp.toggleAll();
    },

    addTodo: function () {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoApp.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },

    changeTodo: function () {
        var changeTodoPosInput = document.getElementById('changeTodoPosInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');

        todoApp.changeTodo(changeTodoPosInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosInput.value, changeTodoTextInput.value = '';
        view.displayTodos();

    },

    deleteTodo: function (position) {
        todoApp.deleteTodo(position);
        view.displayTodos();

    },

    toggleTodo: function () {
        var toggleTodoPosInput = document.getElementById('toggleTodoPosInput');
        todoApp.toggleTodo(toggleTodoPosInput.valueAsNumber);
        view.displayTodos();
    }

}

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoApp.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoApp.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.addDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    addDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setupEventListeners: function () {

        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.className == 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};
view.setupEventListeners();