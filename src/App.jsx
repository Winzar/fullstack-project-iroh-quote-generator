import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <p> This is text being displayed</p>
      <p>This is a button</p>
      <Button />
    </div>
  );
}

export default App;

// should display a default message or should it call to cloud server upon load?
