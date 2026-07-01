import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const menuItems = [
  "Home",
  "About",
  "Skills",
  
  "Work",
  "Experience",
  "Contact",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="navbar-wrapper">

      <div className="container">

        <nav className="navbar navbar-expand-lg custom-navbar">

          {/* Logo */}

          <a href="/" className="navbar-brand logo">

            <div className="logo-icon">
              LA
            </div>

            <span>LAIBA AFZAL</span>

          </a>

          {/* Desktop Menu */}

          <ul className="desktop-nav">

            {menuItems.map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className={active === item ? "active" : ""}
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

          {/* Mobile Button */}

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </nav>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >

            {menuItems.map((item) => (

              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setMenuOpen(false);
                  setActive(item);
                }}
              >
                {item}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}

export default Navbar;