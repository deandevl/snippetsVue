
<template>
  <div>
    <todo-list
      :todos="todos"
      @list-delete-Todo="listDeleteTodo"
      @list-complete-Todo="listCompleteTodo"
    />
    <create-todo @add-todo="addTodo" />
  </div>
</template>

<script>
  import CreateTodo from './components/CreateTodo';
  import TodoList from './components/TodoList';
  import 'semantic-ui-css/semantic.min.css';
  
  export default {
    name: 'App',
    components: {TodoList,CreateTodo},
    data() {
      return {
        todos: [
          {
            title: 'Todo A',
            project: 'Project A',
            done: false
          },
          {
            title: 'Todo B',
            project: 'Project B',
            done: true
          },
          {
            title: 'Todo C',
            project: 'Project C',
            done: false
          },
          {
            title: 'Todo D',
            project: 'Project D',
            done: false
          }
        ]
      };
    },
    methods: {
      addTodo(todo){
        this.todos.push(todo);
      },
      listDeleteTodo(todo){
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex,1);
      },
      listCompleteTodo(todo){
        const todoIndex = this.todos.indexOf(todo);
        this.todos[todoIndex].done = true;
      }
    }
  };
</script>