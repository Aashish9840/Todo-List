import React from "react";
import "./App.css";
function Nav() {
  return (
    <nav className="nav">
      <div className="todolist">
        <a href="">Todolist</a>
      </div>
      <ul className="list-icons">
        <a href="">
          <li>Home</li>
        </a>
        <a href="list-task">
          <li>Tasklist</li>
        </a>
        <a href="">
          <li>TaskFinished</li>
        </a>
      </ul>
    </nav>
  );
}
export default Nav;
