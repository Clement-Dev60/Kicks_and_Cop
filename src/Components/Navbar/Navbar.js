import { Link } from 'react-router-dom';
import logo from '../../Assets/Img/kick_and_cop_logo_simple_gold.png';
import './Navbar.css'
import { IoHeartOutline, IoPersonOutline } from 'react-icons/io5'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    <img src={logo} alt='Logo' />
                </a>
            </div>
            <div className="navbar-right">
                <Link to="/fav" className="fav-icon">
                    <i className="fav"><IoHeartOutline color="#1a1a1a" size={22} /></i>
                    <span className="fav-text">Favoris</span>
                </Link>
                <Link to="/account" className="user-icon">
                    <i className="user"><IoPersonOutline color="#1a1a1a" size={22} /></i>
                    <span className="user-text">User</span>
                </Link>
            </div>
            <div className='burger-menu'>
                <BurgerMenu />
            </div>
        </nav>
    );
}

export default Navbar;
