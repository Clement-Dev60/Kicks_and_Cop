import PhoneIcon from '../../Assets/images/icons/phone-icon.png';
import QuestionIcon from '../../Assets/images/icons/question-mark-icon.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src={QuestionIcon} alt="Question Icon" className="question-icon" />
                <h3>À propos de KICK <span className="footer-span">&</span> COP</h3>
                <p>KICK & COP est votre destination incontournable pour trouver des chaussures élégantes, confortables et adaptées à toutes les occasions. Nous sélectionnons avec soin des modèles de qualité qui allient style et durabilité.</p>
            </div>

            <div className="footer-column">
                <img src={PhoneIcon} alt="Phone Icon" className="phone-icon" />
                <h3>Nous conctater</h3>
                <p>Adresse e-mail: <a href="mailto:KICK&COP@GMAIL.COM">KICK&COP@GMAIL.COM</a></p>
            </div>

            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www/pinterest.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-pinterest"></i>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok"></i>
                </a>
            </div>

            <p>&copy; 2026 Kicks & Cop</p>
        </footer>
    );
}

export default Footer;