<template>
  <div>
    <p class="ui centered card">
      Completed Tasks: {{ todos.filter(todo => {return todo.done===true}).length }}
    </p>
    <p class="ui centered card">
      Pending Tasks: {{ todos.filter(todo => {return todo.done===false}).length }}
    </p>
    <todo
      v-for="(todo,index) in todos"
      :key="index"
      :todo="todo"
      @delete-todo="deleteTodo"
      @complete-todo="completeTodo"
    />
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  name: 'App',
  components: {
    Todo
  },
  props: {
    todos: {
      type: Array,
      default: null
    }
  },
  emits: {
    'list-delete-Todo': null,
    'list-complete-Todo': null
  },
  methods: {
    deleteTodo(todo){
      this.$emit('list-delete-Todo',todo);
    },
    completeTodo(todo){
      this.$emit('list-complete-Todo',todo);
    }
  }
};
</script>
