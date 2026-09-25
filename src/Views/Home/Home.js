import { useEffect, useState } from "react";
import '../../App.css';
import Card from "../../Components/CardSneaker/CardSneaker";
import Herosection from '../../Components/Herosection/Herosection';
import ModalSneaker from "../../Components/ModalSneaker/ModalSneaker";
import api from "../../Services/api";

function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [selectedSneaker, setSelectedSneaker] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadSneakers() {
            const response = await api("Sneakers");

            if (!response || !response.res.ok) {
                setError("Impossible de charger les sneakers.");
                setIsLoading(false);
                return;
            }

            const data = response.data;
            setSneakers(Array.isArray(data) ? data : data.sneakers || data.data || []);
            setIsLoading(false);
        }

        loadSneakers();
    }, []);

    return (
        <div className="homepage">
            <Herosection />
            {isLoading && <p>Chargement des sneakers...</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && (
                <div className="sneakersGrid">
                    {sneakers.map((sneaker) => (
                        <Card
                            key={sneaker.id}
                            sneaker={sneaker}
                            setIsOpen={setIsOpen}
                            setSelectedSneaker={setSelectedSneaker}
                        />
                    ))}
                </div>
            )}
            <ModalSneaker
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                sneaker={selectedSneaker}
            />
        </div>
    )
}

export default Home;