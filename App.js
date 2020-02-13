import React from "react";
import ReactDOM from "react-dom";

const rootDiv = document.getElementById("root");


// // const App = React.createElement("div", {
// //   children: React.createElement("input", {
// //     disabled: false,
// //   }),
// // });

// // const App = React.createElement("ul", {
// //   children: Array.from({ length: 6 }).map((val, idx) =>
// //     React.createElement("li", { children: `Hello ${idx}`, key: idx }),
// //   ),
// // });

// let value = "";
// const Input = React.createElement("input", {
//   onChange: onChangeHandler,
// });
// const Button = React.createElement("button", {
//   type: "submit",
//   children: "save"
// });
// const ButtonContainer = React.createElement("div", {
//   children: Button,
// });
// const Form = React.createElement("form", {
//   onSubmit: submitHandler,
//   children: [Input,  ButtonContainer]
// });

// ReactDOM.render(Form, rootDiv);


// function submitHandler(e) {
//   e.preventDefault();
//   console.log(value);
// }

// function onChangeHandler(e) {
//   value = e.target.value;
// }

// // const input = document.createElement("input");

// // input.disabled = true;

// // rootDiv.appendChild(input);

// //

// // "hello"

`
  // Print the value in console on submit
  <form onSubmit={fn}>
    <input value="abc" />
    <div>
      <button>save</button>
    </div>
  </form>
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "as",
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const { value } = e.target;

    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <form>
        <input type="text" value={value} onChange={this.onChangeHandler} />
        <button type="submit">Save</button>
      </form>
    )
  }
}


ReactDOM.render(<App />, rootDiv);
