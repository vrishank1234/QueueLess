import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const FALLBACK_ITEMS = [
  {
    id: 1,
    name: "Jumbo Vadapav",
    extras: "Extra  Double Cheese",
    price: 70,
    quantity: 1,
    imageUrl:
      "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Jumbo Vadapav",
    extras: "",
    price: 70,
    quantity: 1,
    imageUrl:
      "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const items = state?.items?.length ? state.items : FALLBACK_ITEMS;
  const totalAmount =
    state?.total ??
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQty = items.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div className="checkout">
      <header className="checkout__header">
        <button
          type="button"
          className="checkout__back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <BackIcon />
        </button>
        <h1 className="checkout__title">Checkout</h1>
      </header>

      <main className="checkout__main">
        <section className="checkout__card-list">
          {items.map((item) => (
            <article key={item.id} className="checkout__item-card">
              <div className="checkout__item-left">
                <div className="checkout__image-wrap">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="checkout__image"
                  />
                </div>
                <div className="checkout__item-info">
                  <h2 className="checkout__item-name">{item.name}</h2>
                  {item.extras && (
                    <p className="checkout__item-extras">{item.extras}</p>
                  )}
                  <p className="checkout__item-qty">
                    QYT : {item.quantity ?? 1}px
                  </p>
                </div>
              </div>
              <div className="checkout__item-right">
                <p className="checkout__item-price">
                  ₹ {item.price.toFixed(2)}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="checkout__section">
          <h3 className="checkout__section-title">Order Info</h3>
          <div className="checkout__row">
            <span className="checkout__label">Total Amount</span>
            <span className="checkout__value">
              ₹ {totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="checkout__row">
            <span className="checkout__label">Total Quantity</span>
            <span className="checkout__value checkout__value--accent">
              {totalQty} px
            </span>
          </div>
        </section>

        <section className="checkout__section">
          <h3 className="checkout__section-title">Shipping Details</h3>
          <div className="checkout__shipping-grid">
            <div>
              <p className="checkout__shipping-label">Recipient</p>
              <p className="checkout__shipping-text">Martin Herwitz</p>
            </div>
            <div>
              <p className="checkout__shipping-label">Mobile number</p>
              <p className="checkout__shipping-text">+91 1234567890</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="checkout__footer">
        <button type="button" className="checkout__pay-btn">
          Pay Now
        </button>
      </footer>
    </div>
  );
};

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M15 18l-6-6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Checkout;

