import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Register from './Components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
