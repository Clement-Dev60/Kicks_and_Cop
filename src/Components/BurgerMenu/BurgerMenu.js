import { useState } from "react";
import { Link } from 'react-router-dom';
import "./BurgerMenu.css";

function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className={`burger-icon ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}>
                <div className="burger burger1"></div>
                <div className="burger burger2"></div>
                <div className="burger burger3"></div>
            </div>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/fav" onClick={() => setIsOpen(false)}>Favoris</Link>
                <Link to="/account" onClick={() => setIsOpen(false)}>Mon compte</Link>
            </div>
        </>
    );
}

export default BurgerMenu;