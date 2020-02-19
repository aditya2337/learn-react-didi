import React from "react";

export function Form(props) {

  return (
    <form>
      <input type="text" value={props.value} onChange={props.onChangeHandler} />
      <button type="submit">Save</button>
    </form>
  );
}
