import Hello from "./component/Hello";
import Fruits from "./component/Fruits";
import ConditionalComponent from "./component/ConditionalComponent";

function App() {
  //  return <h1>Hello world!</h1>

  // array
  const person = {
    name: "Sonam",
    occupation: "software engineer",
  }

  return (
    <div className="App">
      {/* props concepts */}
      {/* <Hello name="Sonam" message="Hi" emoji="🖐️" />  */}
      {/* <Hello person={person} /> */}
      {/* <Fruits /> */}

      < ConditionalComponent />
    </div>
  );
}

export default App;
