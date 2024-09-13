import Nav from "./components/Nav";
import Add from "./components/Add";
import React, { useState } from "react";
import Todos from "./components/Todos";
import Messages from "./components/Messages";
import "./components/App.css";
import Todo from "./components/Todo";
import Edit from "./components/Edit";
function App() {
  const [todos, settodos] = useState([]);

  const handleClickAddbutton = (todoitems, id) => {
    // let newtodoitems = [
    //   ...todos,
    //   { task: todoitems, id: id, isEditing: false },
    // ];
    // console.log(newtodoitems);
    // settodos(newtodoitems);

    settodos((currentvalue) => [
      ...currentvalue,
      { task: todoitems, id: id, isEditing: false },
    ]);
  };
  const handleclickdeletebutton = () => {};
  const deleteitems = (deleteitem) => {
    const newtodos = todos.filter((todo) => deleteitem !== todo);
    settodos(newtodos);
  };
  const onhandleEdit = (id) => {
    const updatedtodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    );
    settodos(updatedtodos);
  };

  const editTask = (task, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    if (task === "") {
      alert("Please Update your Task as it cannot be empty");
      return;
    }
    settodos(updatedTodos);
  };
  return (
    <>
      <Nav />
      <div className="entire-container">
        <div className="content">
          <h1>Add Your Future Task</h1>
          <Add handleOnAdd={handleClickAddbutton} />
          {todos.length === 0 ? (
            <Messages />
          ) : (
            <h1 className="h1" id="list-task">
              Your Task List
            </h1>
          )}
          {todos.map((todo, index) => {
            return todo.isEditing ? (
              <Edit key={index} tasks={todo} handleEdit={editTask} />
            ) : (
              ""
            );
          })}
          <Todos
            todoslist={todos}
            deletetodo={deleteitems}
            handleEdit={onhandleEdit}
          ></Todos>
        </div>
      </div>
    </>
  );
}

export default App;
