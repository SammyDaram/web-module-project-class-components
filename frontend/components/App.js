import React from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos:   [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.state({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });

  }
  handleClear = () => {
    this.setState ({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false );
      })
    });
  }
  handleToggle = (clickedId) => {
    const clickedId = 1528817084358;

    this.setState ({
      ...this.state,
      todos: this.state.todos.map(todos => {
        if (todos.id === clickedId) {
          return {
            ...todo,
            completed: !todos.completed
          }
        }
        return todo;
      })
    })
  }
  render() { 
    const {todos} = this.state;
    return (
      <div>
        <hi>Todo App</hi>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}

