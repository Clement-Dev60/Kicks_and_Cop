import "./ModalSneaker.css";
import asicsKayano from "../../Assets/Img/asics-kayano-14-noir-argent.png";

export default function ModalSneaker({ isOpen, setIsOpen, sneaker }) {
  function close() {
    setIsOpen(false);
  }

  if (!isOpen || !sneaker) {
    return null;
  }

  const image = sneaker.image_url
    || (sneaker.image ? `http://localhost/assets/Img/${sneaker.image}` : asicsKayano);
  const name = sneaker.sneaker_name || sneaker.name || sneaker.nom || "Sneaker sans nom";
  const price = sneaker.price ?? sneaker.prix;
  const description = sneaker.description || "Aucune description disponible.";

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="sneaker-title">
      <div className="modalContent">
        <button className="closeButton" onClick={close} aria-label="Fermer">
          x
        </button>
        <div className="modalInfo">
          <div className="modalImageContainer">
            <img className="modalImage" src={image} alt={name} />
          </div>
          <div className="modalDetails">
            <p className="modalEyebrow">Kicks & Cop</p>
            <h2 id="sneaker-title">{name}</h2>
            <p className="modalDescription">{description}</p>
            <p className="modalPrice">
              {price ? `À partir de ${price}€` : "Prix indisponible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
