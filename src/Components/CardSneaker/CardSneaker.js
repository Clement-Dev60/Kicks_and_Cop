import "./CardSneaker.css";
import asicsKayano from "../../Assets/img/asics-kayano-14-noir-argent.png";

const Card = ({ setIsOpen }) => {
  function open() {
    setIsOpen(true);
  }

  return (
    <div className="card" onClick={open}>
      <div className="cardTop">
        <img
          className="cardImage"
          src={asicsKayano}
          alt="asics kayano 14 noir argent"
        />
      </div>
      <div className="cardBottom">
        <h3 className="cardName">Asics Kayano 14 noir argent</h3>
        <p className="cardPrice">À partir de 175€</p>
      </div>
    </div>
  );
};

export default Card;
