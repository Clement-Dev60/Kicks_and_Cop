import Connexion from './components/Auth/Connexion/Connexion';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div >
        <Connexion />
      </div>
    </BrowserRouter>

  );
}

export default App;
