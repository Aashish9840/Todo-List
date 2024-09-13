import { useState } from "react";
function Edit({ handleEdit, tasks }) {
  const [todo, settodo] = useState(tasks.task); // Set initial value to the current task

  const onClickEditbutton = (e) => {
    e.preventDefault();
    handleEdit(todo, tasks.id);
  };

  return (
    <form className="Addtask" onSubmit={onClickEditbutton}>
      <input
        type="text"
        placeholder="Update Your Task"
        onChange={(e) => settodo(e.target.value)}
        value={todo}
      />
      <button type="submit">Update Task</button>
    </form>
  );
}

export default Edit;
