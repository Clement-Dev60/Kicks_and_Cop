import "./CardSneaker.css";
import asicsKayano from "../../Assets/img/asics-kayano-14-noir-argent.png";

const Card = () => {
  return (
    <div class="card">
      <div class="cardTop">
        <img
          class="cardImage"
          src={asicsKayano}
          alt="asics kayano 14 noir argent"
        />
      </div>
      <div class="cardBottom">
        <h3 class="cardName">Asics Kayano 14 noir argent</h3>
        <p class="cardPrice">À partir de 175€</p>
      </div>
    </div>
  );
};

export default Card;
