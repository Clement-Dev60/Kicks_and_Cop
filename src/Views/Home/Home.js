import { useEffect, useState } from "react";
import '../../App.css';
import "./Home.css";
import Card from "../../Components/CardSneaker/CardSneaker";
import Herosection from '../../Components/Herosection/Herosection';
import ModalSneaker from "../../Components/ModalSneaker/ModalSneaker";
import api from "../../Services/api";

function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [featuredSneaker, setFeaturedSneaker] = useState(null);
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
            const loadedSneakers = Array.isArray(data) ? data : data.sneakers || data.data || [];

            setSneakers(loadedSneakers);
            setFeaturedSneaker(
                loadedSneakers[Math.floor(Math.random() * loadedSneakers.length)] || null
            );
            setIsLoading(false);
        }

        loadSneakers();
    }, []);

    return (
        <div className="homepage">
            <Herosection sneaker={featuredSneaker} />
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