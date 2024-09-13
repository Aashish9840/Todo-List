import Todo from "./Todo";
function Todos({ todoslist, deletetodo, handleEdit }) {
  return (
    <>
      <div>
        {todoslist.map((todoitem, index) => (
          <Todo
            key={index}
            tododata={todoitem}
            handledeletebutton={deletetodo}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );
}
export default Todos;
