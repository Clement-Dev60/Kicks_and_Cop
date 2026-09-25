import './Connexion.css'
import { Link } from "react-router";


function Connexion() {

    return (
        <section className='register-page'>
            <div>
                <h1 className="register-title">Kicks <span className="register-title-span">&</span> Cop</h1>
                <h2 className="register-subtitle">Se Connecter</h2>
                <p className='register-text'>Nouveau sur ce site ? <Link className="register-text-link" to="/inscription">S'inscrire</Link></p>

                <form className="register-form" onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-field">
                        <label for="email">Entrez votre E-mail&nbsp;: </label>
                        <input type="email" name="email" id="email" placeholder='maxime@example.com' required />
                    </div>

                    <div className="form-field">
                        <label for="mdp">Entrez votre Mot de Passe&nbsp;: </label>
                        <input type="password" name="mdp" id="mdp" placeholder='8 caractères minimum' required />
                    </div>

                    <Link className="register-button" to="/">Se connecter</Link>
                </form>
            </div >
        </section >


    )
}

export default Connexion
