import { useState } from "react";
import "./App.css";
import Card from "./Components/CardSneaker/CardSneaker";
import Herosection from './Components/Herosection/Herosection';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home'
import Favoris from './Views/Favoris/Favoris'
import Account from './Views/Account/Account'
import Register from './Components/auth/Register';
import Connexion from './Components/auth/Connexion/Connexion';
import Footer from './Components/layout/Footer';
import ModalSneaker from "./Components/ModalSneaker/ModalSneaker";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favoris />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </header>
      <div>
        <Herosection />
        <Card setIsOpen={setIsOpen} />
        <ModalSneaker isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Footer />
    </div>

  );
}

export default App;
