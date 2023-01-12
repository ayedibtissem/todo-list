import React from "react";
import { useDispatch } from "react-redux";
import { FilterAll, FilterDone, FilterUndone } from "../Redux/TodoSlice";
import Button from 'react-bootstrap/Button';
function Filter(props) {
  let dispatch = useDispatch();

  return (
    <div> 
    <Button variant="warning"onClick={() => dispatch(FilterAll())}>ALL</Button>{' '}
    <Button variant="info"onClick={() => dispatch(FilterDone())}>DONE</Button>{' '}
    <Button variant="danger"onClick={() => dispatch(FilterUndone())}>Undone</Button>{' '}

    </div>
  );
}

export default Filter;