import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Details of students</h1>
      <FirstComponent name="Rahim" expertise="Singing"></FirstComponent>
      <FirstComponent name="Karim" expertise="Dancing"></FirstComponent>
      <FirstComponent name="Rabiul" expertise="Cricket"></FirstComponent>
    </div>
  );
}
function FirstComponent(props) {
  const myStyle = {
    border: "2px solid red",
    padding: "10px",
    width: "50%",
    margin: "10px auto",
  };
  return (
    <div style={myStyle}>
      <h2>My Name is {props.name} </h2>
      <h3>I am expert in {props.expertise}</h3>
    </div>
  );
}
export default App;
