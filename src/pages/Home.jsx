import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "./Home.css";

// Table name in Supabase - must have columns: id, name, image_url
const ITEMS_TABLE = "items";

const DUMMY_USER = {
  name: "John Doe",
  info: "Btech 2023-27",
  avatarUrl: null,
};

// DiceBear avatar URL – same seed gives same avatar (use name or user id when from Supabase)
function getDiceBearUrl(seed, style = "lorelei") {
  const s = encodeURIComponent(seed || "user");
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${s}`;
}

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      if (!supabase) {
        setError("Supabase not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in Vercel.");
        setLoading(false);
        return;
      }
      try {
        const { data, error: fetchError } = await supabase
          .from(ITEMS_TABLE)
          .select("id, name, image_url")
          .order("id", { ascending: true });

        if (fetchError) throw fetchError;
        setItems(
          (data ?? []).map((row) => ({
            id: row.id,
            name: row.name,
            imageUrl: row.image_url ?? "",
          }))
        );
      } catch (err) {
        setError(err.message);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__user">
          <div className="home__avatar">
            <img
              src={DUMMY_USER.avatarUrl ?? getDiceBearUrl(DUMMY_USER.name)}
              alt=""
            />
          </div>
          <div className="home__user-info">
            <span className="home__name">{DUMMY_USER.name}</span>
            <span className="home__separator" aria-hidden />
            <span className="home__meta">{DUMMY_USER.info}</span>
          </div>
        </div>
      </header>

      <main className="home__main">
        {loading && <p className="home__status">Loading items…</p>}
        {error && (
          <p className="home__status home__status--error">
            {error}
            <br />
            <small>Ensure the &quot;{ITEMS_TABLE}&quot; table exists with columns: id, name, image_url</small>
          </p>
        )}
        {!loading && !error && items.length === 0 && (
          <p className="home__status">No items yet. Add rows to the &quot;{ITEMS_TABLE}&quot; table in Supabase.</p>
        )}
        {!loading && items.length > 0 && (
          <div className="home__grid">
          {items.map((item) => (
            <article key={item.id} className="home__card">
              <div className="home__card-image-wrap">
                <img
                  src={item.imageUrl || "https://placehold.co/400x300/f3f4f6/9ca3af?text=No+image"}
                  alt={item.name}
                  className="home__card-image"
                />
              </div>
              <h2 className="home__card-name">{item.name}</h2>
            </article>
          ))}
          </div>
        )}
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

function HomeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CategoriesIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}

function CartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function ProfileIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default Home;
