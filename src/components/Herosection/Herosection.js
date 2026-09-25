import './Herosection.css';
import asicsKayano from '../../Assets/Img/asics-kayano-14-noir-argent.png';

function Herosection({ sneaker }) {
    if (!sneaker) {
        return null;
    }

    const image = sneaker.image_url
        || (sneaker.image ? `http://localhost/assets/Img/${sneaker.image}` : asicsKayano);

    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__media">
                    <img className="hero__image" src={image} alt="Sneaker mise en avant" />
                </div>
                <div className="hero__content">
                    <button className="hero__button hero__button--favorite" type="button">
                        Aller aux produits
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Herosection;