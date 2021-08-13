import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

const TodoItem = (props) => {
    //'editing' is simply a boolean value
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        return () => {
            console.log("cleaning up");
        }
    }, []);

    //double-click todo to start editing...
    const handleEditing = () => {
        setEditing(true);
    };

    //keypress while in edit mode
    const handleUpdatedDone = (e) => {
        if (e.key === "Enter") {
            setEditing(false);
        }
    };

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    };

    /*todo is an object {id:"", completed:false, title:""}
     ORDER DOES NOT MATTER!
     This is a case of obj destructuring assignment: code is the same as ->
        const completed = props.todo.completed
        const id = props.todo.id
        const title = props.todo.title
    */
    const { completed, id, title } = props.todo;

    //viewMode, editMode are 'style' objects
    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={completed}
                    onChange={() =>
                        props.handleChangeProps(id)}
                />
                <button
                    onClick={() =>
                        props.deleteTodoProps(id)}>
                    <FaTrash
                        style={{
                            color: "orangered",
                            fontSize: "16px"
                        }}
                    />
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input
                className={styles.textInput}
                type="text"
                style={editMode}
                value={title}
                onChange={(e) => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    );
}

export default TodoItem;
