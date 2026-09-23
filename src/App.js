import { useState } from "react";
import "./App.css";
import Card from "./Components/CardSneaker/CardSneaker";
import ModalSneaker from "./Components/ModalSneaker/ModalSneaker";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Card setIsOpen={setIsOpen} />
        <ModalSneaker isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </div>
  );
}

export default App;
