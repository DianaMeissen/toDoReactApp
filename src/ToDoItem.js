import React, { Component } from 'react'

const ToDoItem = (props) => {
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div>
            {props.items.forEach(item => {
                <div className="todo-item">
                    <input type="checkbox"
                        checked={item.isCompleted}
                        onChange={() => props.handleChange(item.id)} />
                    <p style={item.isCompleted ? completedStyle : null}>{item.task}</p>
                </div>
            })}
        </div>
    );
}

export default ToDoItem