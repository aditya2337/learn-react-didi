const rootDiv = document.getElementById("root");

// const App = React.createElement("div", {
//   children: React.createElement("input", {
//     disabled: false,
//   }),
// });

const App = React.createElement("ul", {
  children: Array.from({ length: 6 }).map((val, idx) =>
    React.createElement("li", { children: `Hello ${idx}`, key: idx }),
  ),
});

ReactDOM.render(App, rootDiv);

// const input = document.createElement("input");

// input.disabled = true;

// rootDiv.appendChild(input);

//

"hello"

`
  // Print the value in console on submit
  <form onSubmit={fn}>
    <input value="abc" />
    <div>
      <button>save</button>
    </div>
  </form>
`;
