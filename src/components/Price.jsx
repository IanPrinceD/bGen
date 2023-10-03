import React from 'react';
import '../css/pricelist.css';

export const Price = ({ price }) => {
  return (
    <>
      <section className="table-container">
        {price.map((price) => {
          return (
            <>
              <div className="body-container">
                <p className="t-data">{price.category}</p>
                <p className="t-data">{price.brand}</p>
                <p className="t-data">{price.model}</p>
                <p className="t-data">{price.price}</p>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
