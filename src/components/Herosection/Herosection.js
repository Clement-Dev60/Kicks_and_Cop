import './Herosection.css';

function Herosection({ shoeName }) {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__media">
                    <img className="hero__image" src={shoeName} alt={shoeName} />
                </div>
                <div className="hero__content">
                    <h2 className="hero__title">{shoeName}</h2>
                    <p className="hero__text">{shoeName}</p>
                    <button className="hero__button hero__button--favorite" type="button">Aller aux produits</button>
                </div>
            </div>
        </section>
    );
}

export default Herosection;