import React from 'react'

const ToDoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" 
                checked={props.item.isCompleted}
                onChange={() => props.handleChange(props.item.id)} />
            <p style={props.item.isCompleted ? completedStyle : null}>{props.item.text}</p>
        </div>
    );
}

export default ToDoItem