import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import airMax from '../../Assets/Img/nike_air_max.jpeg';
import superStar from '../../Assets/Img/adidas_superstar.jpeg';
import pumaRsX from '../../Assets/Img/puma_rs-x.jpeg'
import './Account.css'

const MOCK_ACCOUNT = {
    email: "test@gmail.com",
    favoris: [
        { id: 1, name: "Nike Air Max", image: airMax, price: 129.99 },
        { id: 2, name: "Adidas Superstar", image: superStar, price: 89.99 },
        { id: 3, name: "Puma RS-X", image: pumaRsX, price: 99.99 },
    ]
};

function Account() {
    const [email, setEmail] = useState("");
    const [favoris, setFavoris] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState(null);

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 500));

                // const response = await fetch('');
                // if (!response.ok) throw new Error('Erreur lors du chargement du compte');
                // const data = await response.json();

                const data = MOCK_ACCOUNT;

                setEmail(data.email);
                setFavoris(data.favoris ?? []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAccount();
    }, []);

    const handleSaveEmail = async () => {
        setSaving(true);
        setSaveMessage(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 500));

            // const response = await fetch('', {
            //     method: 'PATCH',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
            // if (!response.ok) throw new Error('Erreur lors de la sauvegarde');

            setSaveMessage({ type: 'success', text: 'Email mis à jour avec succès.' });
        } catch (err) {
            setSaveMessage({ type: 'error', text: "Erreur lors de la sauvegarde de l'email." });
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="account-page">
            <h1>Mon compte</h1>
            <div className="account-section">
                <h2>Informations personnelles</h2>
                {loading ? (
                    <p>Chargement...</p>
                ) : (
                    <>
                        <div className='mail'>
                            <p>Email : </p>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='email'
                            />
                        </div>

                        <button
                            onClick={handleSaveEmail}
                            disabled={saving}
                            className="save-btn"
                        >
                            {saving ? 'Enregistrement...' : 'Enregistrer'}
                        </button>

                        {saveMessage && (
                            <p className={`save-message ${saveMessage.type}`}>
                                {saveMessage.text}
                            </p>
                        )}
                    </>
                )}
            </div>
            <div className="account-section">
                <h2>Mes favoris</h2>

                {loading && <p>Chargement...</p>}
                {error && <p className="error">{error}</p>}

                {!loading && !error && favoris.length === 0 && (
                    <p>Aucun favori pour le moment.</p>
                )}

                {!loading && !error && favoris.length > 0 && (
                    <div className="favoris-preview">
                        {favoris.slice(0, 3).map((item) => (
                            <div key={item.id} className="favori-card">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <span>{item.price} €</span>
                            </div>
                        ))}
                    </div>
                )}

                <Link to="/fav" className="see-all-btn">
                    Voir tous mes favoris
                </Link>
            </div>
        </div >
    );
}

export default Account;