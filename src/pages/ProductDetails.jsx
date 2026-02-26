import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const FALLBACK_ITEM = {
  name: "Jumbo Vadapav",
  price: "₹ 30.00",
  imageUrl:
    "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  categoryTitle: "Vadapav",
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state?.item || FALLBACK_ITEM;

  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState({
    spicy: true,
    cheese: true,
    doubleCheese: false,
  });

  const handleToggleExtra = (key) => {
    setExtras((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDecrease = () => {
    setQuantity((q) => Math.max(1, q - 1));
  };

  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  const handleAddToCart = () => {
    // Hook into your real cart logic later
    console.log("Add to cart", { item, quantity, extras });
  };

  const handlePlaceOrder = () => {
    console.log("Place order", { item, quantity, extras });
  };

  return (
    <div className="product">
      <header className="product__top">
        <button
          type="button"
          className="product__back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <BackIcon />
        </button>
        <h1 className="product__title">{item.categoryTitle || "Vadapav"}</h1>
      </header>

      <main className="product__main">
        <div className="product__image-wrap">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="product__image"
          />
        </div>

        <section className="product__card">
          <div className="product__card-header">
            <div>
              <h2 className="product__name">{item.name}</h2>
              <p className="product__price">{item.price}</p>
            </div>
          </div>

          <div className="product__row product__row--qty-time">
            <div className="product__qty">
              <button
                type="button"
                className="product__qty-btn"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="product__qty-value">{quantity}</span>
              <button
                type="button"
                className="product__qty-btn product__qty-btn--plus"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <div className="product__time">
              <ClockIcon className="product__time-icon" />
              <span>15 - 20 min</span>
            </div>
          </div>

          <div className="product__section">
            <h3 className="product__section-title">Details</h3>
            <p className="product__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              sit scelerisque vestibulum magnis. Auctor dolor, tincidunt enim
              pharetra.
            </p>
          </div>

          <div className="product__section">
            <h3 className="product__section-title">Extras</h3>

            <div className="product__extra-row">
              <label className="product__extra-left">
                <span
                  className={`product__checkbox${
                    extras.spicy ? " product__checkbox--checked" : ""
                  }`}
                  aria-hidden
                >
                  {extras.spicy && <CheckIcon />}
                </span>
                <span>Spicy</span>
              </label>
              <input
                type="checkbox"
                className="product__extra-input"
                checked={extras.spicy}
                onChange={() => handleToggleExtra("spicy")}
              />
            </div>

            <div className="product__extra-row">
              <label className="product__extra-left">
                <span
                  className={`product__checkbox${
                    extras.cheese ? " product__checkbox--checked" : ""
                  }`}
                  aria-hidden
                >
                  {extras.cheese && <CheckIcon />}
                </span>
                <span>Cheese</span>
              </label>
              <div className="product__extra-right">
                <span className="product__extra-price">₹ 20.00</span>
                <input
                  type="checkbox"
                  className="product__extra-input"
                  checked={extras.cheese}
                  onChange={() => handleToggleExtra("cheese")}
                />
              </div>
            </div>

            <div className="product__extra-row">
              <label className="product__extra-left">
                <span
                  className={`product__checkbox${
                    extras.doubleCheese ? " product__checkbox--checked" : ""
                  }`}
                  aria-hidden
                >
                  {extras.doubleCheese && <CheckIcon />}
                </span>
                <span>Double Cheese</span>
              </label>
              <div className="product__extra-right">
                <span className="product__extra-price">₹ 40.00</span>
                <input
                  type="checkbox"
                  className="product__extra-input"
                  checked={extras.doubleCheese}
                  onChange={() => handleToggleExtra("doubleCheese")}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="product__footer">
        <button
          type="button"
          className="product__btn product__btn--secondary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="product__btn product__btn--primary"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </footer>
    </div>
  );
};

function BackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
      focusable="false"
    >
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

function ClockIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden focusable="false">
      <path
        d="M13.6 4.2L6.5 11.3 2.4 7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ProductDetails;

