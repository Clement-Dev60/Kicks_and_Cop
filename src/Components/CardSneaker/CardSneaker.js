import "./CardSneaker.css";
import asicsKayano from "../../Assets/Img/asics-kayano-14-noir-argent.png";

const Card = ({ sneaker, setIsOpen, setSelectedSneaker }) => {
  function open() {
    setSelectedSneaker(sneaker);
    setIsOpen(true);
  }

  const image = sneaker.image_url || asicsKayano;
  const name = sneaker.sneaker_name || sneaker.name || sneaker.nom || "Sneaker sans nom";
  const price = sneaker.price ?? sneaker.prix;

  return (
    <div className="card" onClick={open}>
      <div className="cardTop">
        <img
          className="cardImage"
          src={image}
          alt={name}
        />
      </div>
      <div className="cardBottom">
        <h3 className="cardName">{name}</h3>
        <p className="cardPrice">
          {price ? `À partir de ${price}€` : "Prix indisponible"}
        </p>
      </div>
    </div>
  );
};

export default Card;
