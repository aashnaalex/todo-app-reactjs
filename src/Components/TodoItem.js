import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export class TodoItem extends Component {

    getStyle = () => {
        return{
            backgroundColor: "lightGrey",
            padding: "5px",
            border: "2px solid white",
            height: "27px",
            fontFamily: "sans-serif",
            fontSize: "14px",
            textDecoration: !this.props.todo.completed? "none": "line-through",
            // display: "flex"
        }
        
    }

    btnStyle = () => {
        return{

            backgroundColor: "grey",
            border: "1px solid grey",
            float: "right",
            borderRadius: "2px",
            cursor: "pointer",
            padding: "5px"
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                    <input type="checkBox" onChange = {this.props.markComplete.bind(this, id)} />{' '}
                    <span>{title}</span>
                    <button onClick = {this.props.deleteElement.bind(this, id)} style = {this.btnStyle()} >Delete</button>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
