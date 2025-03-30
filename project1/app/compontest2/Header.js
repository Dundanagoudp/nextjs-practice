"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header" data-theme={theme}>
      <nav className="nav-container">
        <ul className="navbar">
          <li>
            <Link
              href="/"
              className={`nav-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`nav-link ${pathname === "/services" ? "active" : ""}`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={`nav-link ${pathname === "/blogs" ? "active" : ""}`}
            >
              Blogs
            </Link>
          </li>
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </nav>
    </header>
  );
}