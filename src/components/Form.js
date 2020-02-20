import React from "react";

export function Form(props) {

  return (
    <form>
      <input type="text" value={props.value} onChange={props.onChangeHandler} ref={props.inputRef} />
      <button type="submit" onClick={props.onClickHandler}>Save</button>
    </form>
  );
}
