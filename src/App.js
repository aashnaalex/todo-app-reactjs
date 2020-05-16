import React from 'react';
import './App.css';
import axios from 'axios';
import Todo from './Components/Todo';
import Layout from './Components/Layout';


class App extends React.Component {

  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'buy grocery',
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "clean home",
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: 'buy a book'
      // }
    ]
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(res => {
      const todoItems = res.data
      this.setState({todos: todoItems})
    })
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  addElement = (title) => {
    var length = 0
    var newTodo = this.state.todos
    var id = newTodo.length+1
    var todo = {
      id,
      title,
      completed: false
    }
    newTodo.push(todo)
    this.setState({ todos: newTodo})
    console.log(todo.completed)
  }

  deleteElement = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <div className="App">
        <div className = "container">
          <Layout addElement = {this.addElement}></Layout>
          <Todo key={this.state.todos.id} todos={this.state.todos} markComplete={this.markComplete} deleteElement = {this.deleteElement}></Todo>
        </div>
      </div>
    );
  }
}

export default App;
