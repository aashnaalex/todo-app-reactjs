import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todo extends React.Component {


  render(){
    return this.props.todos.map((todo) =>(
        <TodoItem key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} deleteElement = {this.props.deleteElement}></TodoItem>
      )
    );
  }
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todo;