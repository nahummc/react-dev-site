import React, { useState } from 'react';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js'
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const addTodo = () => {
        // make sure todo isnt empty
        if (todo !== "") {
        // map current todos along with todo to the todos
            setTodos([...todos, todo]);
            setTodo("");
        } else {
            alert("please enter in a task")
        }
    };

  const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
        return todo !== text;
    });
    setTodos(newTodos);
  };
// BUG - IF TODO OBJ HAS THE SAME NAME AS ANOTHER IN THE LIST, THE DELETE BUTTON WILL DELETE BOTH/ALLENTRIES OF THAT NAME. POSSIBLE FIX WITH INCREMENTING ID PROP?
  return (
    <div className=''>
      <h1>Updating state</h1>
        <TodoInput className='input' todo={todo} setTodo={setTodo} addTodo={addTodo} />
        {/* passing todos and the method delete todos as props */}
        <TodoList list={todos} remove={deleteTodo} />
      

      
    </div>
  );
}

export default Todo