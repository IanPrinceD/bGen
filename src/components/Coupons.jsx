import '../css/coupons.css';

export const Coupons = ({ coupons }) => {
  return (
    <>
      <section className="coupon-container">
        {coupons.map((coupons) => (
          <img
            className="coupon-img"
            src={coupons.image}
            alt={coupons.title}
            key={coupons.image}
          />
        ))}
      </section>
    </>
  );
};
