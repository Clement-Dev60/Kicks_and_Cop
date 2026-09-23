import { useState } from "react";
import '../../App.css';
import Card from "../../Components/CardSneaker/CardSneaker";
import Herosection from '../../Components/Herosection/Herosection';
import ModalSneaker from "../../Components/ModalSneaker/ModalSneaker";

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="homepage">
            <Herosection />
            <Card setIsOpen={setIsOpen} />
            <ModalSneaker isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default Home;