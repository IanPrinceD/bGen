import '../css/laptop.css';

export const Laptop = ({ laptop }) => {
  return (
    <>
      <section className="lcards-container">
        {laptop.map((laptop) => {
          return (
            <section className="lcard-container">
              <img
                className="lcard-img"
                src={laptop.image}
                alt={laptop.model}
                key={laptop.image}
              />
              <div>
                <h3>{laptop.model}</h3>
                <p>{laptop.rating}</p>
                <p>{laptop.price}</p>
                <div className="le-btn">
                  <a className="licon-btn" href="/BuyNow">
                    <button>Buy Now</button>
                  </a>
                  <a className="licon-btn" href="">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                  <a className="licon-btn" href="">
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
