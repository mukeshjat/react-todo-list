import React from "react";

const TodoList = ({ todos, setTodos, edit , setEdit}) => {
//   console.log("todos", todos.index);
//   console.log(todos.length);
const deleteItem = ({id}) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
    console.log("todos", todos);
}
const editItem = ({id}) =>{
    const editTodo = todos.find((todo) => todo.id === id);
    setEdit(editTodo);
}
  return (
    <>
      <h1>todo items</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Sno</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
        {todos.map((todo, index) => (
        <tr key={todo.id}>
            <td >
            <input
              type="text"
              value={index + 1}
              className="list"
              onChange={(event) => event.preventDefault()}
            />
          </td>
          <td >
            <input
              type="text"
              value={todo.userName}
              className="list"
              onChange={(event) => event.preventDefault()}
            />
          </td>
          <td >
            <input
              type="text"
              value={todo.userEmail}
              className="list"
              onChange={(event) => event.preventDefault()}
            />
          </td>
            <td>
                <button className="button-edit task-button" onClick={() => editItem(todo)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className="button-delete task-button" onClick={() => deleteItem(todo)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
      ))}
        </tbody>
      </table>
    </>
  );
};
export default TodoList;
