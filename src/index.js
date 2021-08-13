import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//components
import TodoContainer from "./functionBased/components/TodoContainer.js";

//stylesheet
import "./functionBased/App.css";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
