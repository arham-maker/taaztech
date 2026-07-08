"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { logos } from "@/lib/images";
import { useStickyHeader } from "@/hooks/useStickyHeader";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolledOnPage = useStickyHeader(50);
  const scrolled = !isHome || scrolledOnPage;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : "site-header--top"}`}
    >
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="TaazTech home">
          <Image
            src={logos.white}
            alt="TaazTech"
            width={240}
            height={63}
            className="site-header__logo-white"
            priority
          />
          <Image
            src={logos.black}
            alt="TaazTech"
            width={240}
            height={63}
            className="site-header__logo-black"
            priority
          />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul
            className={`site-header__menu ${scrolled ? "site-header__menu--dark" : "site-header__menu--light"}`}
          >
            {navLinks.map((link) => (
              <li key={link.label} className="site-header__item">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="tel:8178757777" className="site-header__phone">
            <PhoneIcon />
            <span>817.875.7777</span>
          </a>
          <Link href="/contact-us" className="site-header__cta">
            Get In Touch
          </Link>
          <button
            type="button"
            className="site-header__toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
                Get In Touch
              </Link>
            </li>
          </ul>
          <a href="tel:8178757777" className="mobile-menu__phone">
            817.875.7777
          </a>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor" aria-hidden>
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}
