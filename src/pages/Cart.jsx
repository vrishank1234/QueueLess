import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Cart.css";
import "./Home.css";

const INITIAL_ITEMS = [
  {
    id: 1,
    name: "Jumbo Vadapav",
    subtitle: "Extra Cheese",
    price: 50,
    imageUrl:
      "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
    quantity: 1,
  },
  {
    id: 2,
    name: "Jumbo Vadapav",
    subtitle: "",
    price: 50,
    imageUrl:
      "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
    quantity: 1,
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleChangeQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { items, total } });
  };

  return (
    <div className="cart">
      <header className="cart__header">
        <button
          type="button"
          className="cart__icon-btn cart__icon-btn--back"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <BackIcon />
        </button>
        <h1 className="cart__title">Cart</h1>
        <button
          type="button"
          className="cart__icon-btn cart__icon-btn--close"
          aria-label="Close cart"
        >
          <CloseIcon />
        </button>
      </header>

      <main className="cart__main">
        {items.map((item) => (
          <article key={item.id} className="cart__card">
            <div className="cart__card-left">
              <div className="cart__image-wrap">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="cart__image"
                />
              </div>
              <div className="cart__info">
                <h2 className="cart__name">{item.name}</h2>
                {item.subtitle && (
                  <p className="cart__subtitle">{item.subtitle}</p>
                )}
                <div className="cart__qty-row">
                  <button
                    type="button"
                    className="cart__qty-btn"
                    onClick={() => handleChangeQty(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="cart__qty-value">{item.quantity}</span>
                  <button
                    type="button"
                    className="cart__qty-btn cart__qty-btn--plus"
                    onClick={() => handleChangeQty(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="cart__card-right">
              <p className="cart__price">₹ {item.price.toFixed(2)}</p>
              <button
                type="button"
                className="cart__trash-btn"
                onClick={() => handleRemove(item.id)}
                aria-label="Remove item"
              >
                <TrashIcon />
              </button>
            </div>
          </article>
        ))}
      </main>

      <footer className="cart__footer">
        <div className="cart__total-row">
          <span className="cart__total-label">Total</span>
          <span className="cart__total-amount">₹ {total.toFixed(2)}</span>
        </div>
        <button
          type="button"
          className="cart__checkout-btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </footer>

      <nav className="home__nav" aria-label="Main">
        <NavLink to="/Home" className="home__nav-item" end>
          <HomeIcon className="home__nav-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/categories" className="home__nav-item">
          <CategoriesIcon className="home__nav-icon" />
          <span>Categories</span>
        </NavLink>
        <NavLink to="/cart" className="home__nav-item">
          <CartIcon className="home__nav-icon" />
          <span>Cart</span>
        </NavLink>
        <NavLink to="/profile" className="home__nav-item">
          <ProfileIcon className="home__nav-icon" />
          <span>Profile</span>
        </NavLink>
      </nav>
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

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M18 6L6 18M6 6l12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M3 6h18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 6V4h8v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6l1 13h10l1-13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CategoriesIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function CartIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function ProfileIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default Cart;

