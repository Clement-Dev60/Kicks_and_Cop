import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Register from './Components/auth/Register';
import Connexion from './Components/auth/Connexion/Connexion';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
