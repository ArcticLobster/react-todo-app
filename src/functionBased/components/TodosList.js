import React from "react";
import TodoItem from "./TodoItem.js";

const TodosList = (props) => {
    return (
        <ul>
            {props.todos.map(
                todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={props.handleChangeProps}
                        deleteTodoProps={props.deleteTodoProps}
                        setUpdate={props.setUpdateProps}
                    />
            )}
        </ul>
    );
}

export default TodosList;
