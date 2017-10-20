import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
        <div>
            <App/>
        </div>,
    document.getElementById("root"));
registerServiceWorker();

// web address => http://fn-development-fernando550.c9users.io/