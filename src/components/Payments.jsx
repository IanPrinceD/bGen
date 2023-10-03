import '../css/payments.css';

export const Payments = ({ payments }) => {
  return (
    <>
      <section className="payment-container">
          {payments.map((payments) => (
            <img
              className="payments-img"
              src={payments.image}
              alt={payments.title}
              key={payments.image}
            />
          ))}
      </section>
    </>
  );
};
