import logo from "./logo.svg";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Form>
          <Form.Group>
            <Button>button</Button>
          </Form.Group>
          <Form.Group>
            <Button>button2</Button>
          </Form.Group>
        </Form>
      </header>
    </div>
  );
}

export default App;
