import '../css/featured.css';

export const Featured = ({ featured }) => {
  return (
    <>
      <section className="cards-container">
        {featured.map((featured) => {
          return (
            <section className="card-container">
              <img
                className="card-img"
                src={featured.image}
                alt={featured.model}
                key={featured.image}
              />
              <div>
                <h3>{featured.model}</h3>
                <p>{featured.rating}</p>
                <p>{featured.price}</p>
                <div className="e-btn">
                  <a className="icon-btn" href="/BuyNow">
                    <button>Buy Now</button>
                  </a>
                  <a className="icon-btn" href="">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                  <a className="icon-btn" href="">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
};
