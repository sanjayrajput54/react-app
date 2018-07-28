import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  const onDeleteTodo = () => {
    console.log(input.value);
    if (!input.value.trim()) {
      return;
    }
    dispatch(deleteTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={onDeleteTodo}>
          Delete Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
