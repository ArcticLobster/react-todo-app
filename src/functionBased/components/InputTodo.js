import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = (props) => {
    const [inputText, setInputText] = useState({
        title: ""
    });

    const onChange = (e) => {
        setInputText({ //merging of objects using spread op
            ...inputText,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title);
            setInputText({
                title: ""
            });
        } else {
            alert("Please enter a valid ToDo.");
        }
    }

    return (
        <form
            className="form-container"
            onSubmit={handleSubmit}
        >
            <input
                className="input-text"
                type="text"
                placeholder="Add Todos..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />

            <button
                className="input-submit"
                type="submit"
            >
                <FaPlusCircle
                    style={{
                        color: "darkcyan",
                        fontSize: "20px",
                        marginTop: "2px"
                    }}
                />
            </button>
        </form>
    );
}

export default InputTodo;
