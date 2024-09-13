import "./App.css";
import { useState } from "react";
function Add({ handleOnAdd }) {
  const [todo, settodo] = useState("");
  const [id, setid] = useState(0);
  const onClickinput = (e) => {
    settodo(e.target.value);
  };
  const onClickAddbutton = () => {
    if (!todo) {
      alert("Please Enter the Todo");
    } else {
      handleOnAdd(todo, id);
      setid(id + 1);
      settodo("");
    }
  };
  return (
    <div className="Addtask">
      <input
        type="text"
        placeholder="Place your tasklist"
        onChange={(e) => onClickinput(e)}
        value={todo}
      />
      <button onClick={() => onClickAddbutton()}>AddTask</button>
    </div>
  );
}
export default Add;
