import React, { useState, useEffect } from "react";
import TodosList from "./TodosList.js";
import Header from "./Header.js";
import InputTodo from "./InputTodo.js";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About.js";
import NotMatch from "../pages/NotMatch.js";
import Navbar from "./Navbar.js";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos());

    function getInitialTodos() {
        //getting stored items (optimized 1 render)
        const temp = localStorage.getItem("todos");
        const savedTodos = JSON.parse(temp);
        return savedTodos || [];
    }

    useEffect(() => {
        //storing todos items
        const temp = JSON.stringify(todos);
        localStorage.setItem("todos", temp);
    }, [todos]);

    const handleChange = (id) => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    };

    const delTodo = (id) => {
        //keep TODOs that do not have the deleted ID
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ]);
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        );
    };

    return (
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo
                                addTodoProps={addTodoItem}
                            />
                            <TodosList
                                todos={todos}
                                handleChangeProps={handleChange}
                                deleteTodoProps={delTodo}
                                setUpdateProps={setUpdate}
                            />
                        </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default TodoContainer;
