import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Profile.css";
import "./Home.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile">
      <header className="profile__header">
        <button
          type="button"
          className="profile__back-btn"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <BackIcon />
        </button>
        <h1 className="profile__title">Profile</h1>
      </header>

      <main className="profile__main">
        <section className="profile__card">
          <div className="profile__user-row">
            <div className="profile__avatar" aria-hidden />
            <div className="profile__user-text">
              <h2 className="profile__name">John Doe</h2>
              <p className="profile__email">johend@organisation.in</p>
              <p className="profile__phone">+91 1234567890</p>
            </div>
          </div>
        </section>

        <section className="profile__card">
          <button type="button" className="profile__item">
            <span className="profile__item-left">
              <span className="profile__item-icon profile__item-icon--orders">
                <OrdersIcon />
              </span>
              <span>My Orders</span>
            </span>
            <span className="profile__chevron">
              <ChevronIcon />
            </span>
          </button>

          <button type="button" className="profile__item">
            <span className="profile__item-left">
              <span className="profile__item-icon profile__item-icon--terms">
                <AlertIcon />
              </span>
              <span>Terms  &amp; condition</span>
            </span>
            <span className="profile__chevron">
              <ChevronIcon />
            </span>
          </button>

          <button type="button" className="profile__item">
            <span className="profile__item-left">
              <span className="profile__item-icon profile__item-icon--about">
                <InfoIcon />
              </span>
              <span>About</span>
            </span>
            <span className="profile__chevron">
              <ChevronIcon />
            </span>
          </button>

          <button type="button" className="profile__item">
            <span className="profile__item-left">
              <span className="profile__item-icon profile__item-icon--dev">
                <DevIcon />
              </span>
              <span>Developer</span>
            </span>
            <span className="profile__chevron">
              <ChevronIcon />
            </span>
          </button>
        </section>

        <div className="profile__logout-wrap">
          <button
            type="button"
            className="profile__logout-btn"
            onClick={handleLogout}
          >
            <LogoutIcon />
            <span>Log Out</span>
          </button>
        </div>
      </main>

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

function OrdersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        ry="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 2v4M16 2v4M7 10h10M7 14h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M12 2 2 20h20L12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 10v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function DevIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M8 5 3 12l5 7M16 5l5 7-5 7M10 15h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden focusable="false">
      <path
        d="M10 17l-5-5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12h11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
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

export default Profile;

