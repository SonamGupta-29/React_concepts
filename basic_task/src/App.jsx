import Hello from "./component/Hello";

function App() {
  //  return <h1>Hello world!</h1>

  return (
    <div className="App">
      {/* props concepts */}
      <Hello name="Sonam" message="Hi" emoji="🖐️" /> 
    </div>
  );
}

export default App;
