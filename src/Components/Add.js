import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtodo } from "../Redux/TodoSlice";
import Button from 'react-bootstrap/Button';
function Add(props) {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState("");
  const changeHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(Addtodo({ id: Math.random(), task: newTodo, isDone: false }));
    setNewTodo("");
  };
  return (
    <div>
      <form className='form' onSubmit={addHandler}>
        <input className='input'
        type="text"
          name="task"
          value={newTodo}
          onChange={changeHandler}
        />
        
        <Button variant="primary"type="submit">ADD</Button>{' '}
        
      </form>
    </div>
  );
}

export default Add;