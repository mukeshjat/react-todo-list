import React , {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './componets/Header';
import Form from './componets/Form';
import TodoList from './componets/TodoList';
import Api from './componets/Apies/Api';
function App() {

  const users = JSON.parse(localStorage.getItem("todos")) || [];
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState(users);
  const [edit , setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <div className="container">
    <div className="app-wrapper">
    {/* <div>
        <Header />
    </div> */}
    {/* <div>
      <Api />
    </div> */}
    <div>
    <Form edit={edit} setEdit={setEdit} fullname={fullname} setFullname ={setFullname} email={email} setEmail ={setEmail} todos={todos} setTodos = {setTodos} />
    </div>
    <div>
      <TodoList edit={edit} setEdit={setEdit} todos={todos} setTodos={setTodos} />
    </div>
    </div>
</div>
  );
}

export default App;
