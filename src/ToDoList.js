import React from 'react'

const ToDoList = (props) => {
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-list">
            {props.items.map(item =>
                <div className="todo-item">
                    <input type="checkbox"
                        checked={item.isCompleted}
                        onChange={() => props.handleChange(item.id)} />
                    <p style={item.isCompleted ? completedStyle : null}>{item.task}</p>
                </div>
            )}
        </div>
    )
}
export default ToDoList