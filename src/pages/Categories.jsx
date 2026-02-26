import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Categories.css";
import "./Home.css";

const CATEGORY_CHIPS = [
  { id: "vadapav", label: "Vadapav" },
  { id: "dabeli", label: "Dabeli" },
  { id: "pavbhaji", label: "Pavbhaji" },
];

const CATEGORY_ITEMS = [
  {
    id: 1,
    name: "Jumbo Vadapav",
    price: "₹ 30.00",
    imageUrl: "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Peri-peri Vadapav",
    price: "₹ 40.00",
    imageUrl: "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "Tandoori Vadapav",
    price: "₹ 40.00",
    imageUrl: "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Schezwann Vadapav",
    price: "₹ 40.00",
    imageUrl: "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Maharaja Vadapav",
    price: "₹ 45.00",
    imageUrl: "https://images.pexels.com/photos/14384592/pexels-photo-14384592.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Categories = () => {
  const [activeChip, setActiveChip] = useState("dabeli");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredItems = CATEGORY_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="categories">
      <header className="categories__header">
        <div className="categories__search">
          <div className="categories__search-icon" aria-hidden>
            <SearchIcon />
          </div>
          <input
            type="text"
            className="categories__search-input"
            placeholder="Search your favourite food"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="categories__chips" aria-label="Food categories">
          {CATEGORY_CHIPS.map((chip) => (
            <button
              key={chip.id}
              type="button"
              className={`categories__chip${
                chip.id === activeChip ? " categories__chip--active" : ""
              }`}
              onClick={() => setActiveChip(chip.id)}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </header>

      <main className="categories__main">
        <div className="categories__grid">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="categories__card"
              onClick={() => navigate(`/product/${item.id}`, { state: { item } })}
            >
              <div className="categories__card-image-wrap">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="categories__card-image"
                />
              </div>
              <div className="categories__card-body">
                <h2 className="categories__card-title">{item.name}</h2>
                <p className="categories__card-price">{item.price}</p>
              </div>
            </article>
          ))}
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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      className="categories__search-svg"
    >
      <path
        d="M11 4a7 7 0 1 1-4.95 2.05A7 7 0 0 1 11 4m0-2a9 9 0 1 0 5.66 15.86l3.74 3.74 1.41-1.41-3.74-3.74A9 9 0 0 0 11 2Z"
        fill="currentColor"
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

export default Categories;

