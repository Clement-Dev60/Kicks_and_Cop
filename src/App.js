
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home'
import Favoris from './Views/Favoris/Favoris'
import Account from './Views/Account/Account'
import Register from './Components/Auth/Register';
import Connexion from './Components/Auth/Connexion/Connexion';
import Footer from './Components/layout/Footer';
import ModalSneaker from "./Components/ModalSneaker/ModalSneaker";

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
