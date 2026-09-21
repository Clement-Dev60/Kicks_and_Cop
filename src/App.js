import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home'
import Favoris from './Views/Favoris/Favoris'
import Account from './Views/Account/Account'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favoris />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
