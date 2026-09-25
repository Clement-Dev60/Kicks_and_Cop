import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Account.css'
import api from "../../Services/api";

function Account() {
    const [email, setEmail] = useState("");
    const [favoris, setFavoris] = useState([]);
    const [loadingFavoris, setLoadingFavoris] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState(null);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadUser() {
            const response = await api("Users?id=2");

            if (!response || !response.res.ok) {
                setError("Impossible de charger le user.");
                setIsLoading(false);
                return;
            }

            const data = response.data;
            const loadedUser = Array.isArray(data) ? data[0] : (data.user || data.data || data);

            setUser(loadedUser);
            setEmail(loadedUser?.mail || "");
            setIsLoading(false);
        }

        loadUser();
    }, []);

    useEffect(() => {
        async function loadFavoris() {
            try {
                const response = await api("Favorites");

                if (!response || !response.res.ok) {
                    setFavoris([]);
                    setLoadingFavoris(false);
                    return;
                }

                const data = response.data;
                setFavoris(Array.isArray(data) ? data : data.favoris || []);
            } catch (err) {
                setFavoris([]);
            } finally {
                setLoadingFavoris(false);
            }
        }

        loadFavoris();
    }, []);

    const handleSaveEmail = async () => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setSaveMessage({ type: 'error', text: "Adresse email invalide." });
            return;
        }

        setSaving(true);
        setSaveMessage(null);

        try {
            const body = new URLSearchParams({ mail: email }).toString();
            const response = await api("Users", "PATCH", body);

            if (!response || !response.res.ok) {
                throw new Error('Erreur lors de la sauvegarde');
            }

            setUser((prev) => ({ ...prev, mail: email }));
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
                {isLoading ? (
                    <p>Chargement...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : (
                    <>
                        <div className='mail'>
                            <p>Email : </p>
                            <input
                                name='email'
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

                {loadingFavoris && <p>Chargement...</p>}

                {!loadingFavoris && favoris.length === 0 && (
                    <p>Aucun favori pour le moment.</p>
                )}

                {!loadingFavoris && favoris.length > 0 && (
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
        </div>
    );
}

export default Account;