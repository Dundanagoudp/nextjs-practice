"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false); // Now using state

  const toggleTheme = () => {
    setIsDark(!isDark);
    // You might want to add localStorage persistence here
  };

  return (
    <header className={`header ${isDark ? 'dark' : 'light'}`}>
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
          {/* <li>
            <Link 
              href="/blog" 
              className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
            >
              Blogs
            </Link>
          </li> */}
        </ul>
        
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDark ? '☀️' : '🌙'} {/* Using emoji instead of icons */}
        </button>
      </nav>
    </header>
  );
}