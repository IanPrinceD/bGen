import '../css/components.css';

export const Components = ({ components }) => {
  return (
    <>
      <section className="fcards-container">
        {components.map((components) => {
          return (
            <section className="fcard-container">
              <img
                className="fcard-img"
                src={components.image}
                alt={components.model}
                key={components.image}
              />
              <div>
                <h3>{components.model}</h3>
                <p>{components.rating}</p>
                <p>{components.price}</p>
                <div className="fe-btn">
                  <a className="ficon-btn" href="/BuyNow">
                    <button>Buy Now</button>
                  </a>
                  <a className="ficon-btn" href="">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                  <a className="ficon-btn" href="">
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
