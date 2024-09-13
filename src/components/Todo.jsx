import "./App.css";
function Todo({ tododata, handledeletebutton, handleEdit }) {
  return (
    <div className="todolist">
      <div className="todo-content">{tododata.task}</div>
      {tododata && (
        <div className="button">
          <button onClick={() => handleEdit(tododata.id)}>Edit</button>
          <button onClick={() => handledeletebutton(tododata)}>Delete</button>
        </div>
      )}
    </div>
  );
}
export default Todo;
