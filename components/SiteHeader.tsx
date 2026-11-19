"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MapPinIcon, MenuIcon } from "./Icons";

type SiteHeaderProps = {
  whatsappUrl: string;
};

const navItems = [
  { href: "#primeira-visita", label: "Primeira visita" },
  { href: "#cuidados", label: "Cuidados" },
  { href: "#sobre", label: "Sobre a Dra. Anne" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="funbar" aria-label="Destaques da clínica">
        <div className="marquee-track">
          <span>Odontopediatria em Cascavel/PR</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span>Primeira visita desde os primeiros dentinhos</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span>Filosofia Cárie Zero</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span>Acolhimento sem trauma</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span aria-hidden="true">Odontopediatria em Cascavel/PR</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span aria-hidden="true">Primeira visita desde os primeiros dentinhos</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span aria-hidden="true">Filosofia Cárie Zero</span>
          <span className="marquee-dot" aria-hidden="true" />
          <span aria-hidden="true">Acolhimento sem trauma</span>
          <span className="marquee-dot" aria-hidden="true" />
        </div>
      </div>

      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Smile Kids Odontologia — voltar ao início">
          <picture>
            <source srcSet="/smile-kids-logo.webp" type="image/webp" />
            <img
              src="/smile-kids-logo.png"
              alt="Smile Kids Odontologia"
              width={440}
              height={178}
              decoding="async"
            />
          </picture>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="button button-coral nav-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Agendar consulta</span>
            <ArrowUpRightIcon size={16} />
          </a>

          <button
            ref={toggleButtonRef}
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer ${menuOpen ? "is-open" : ""}`}
        hidden={!menuOpen}
      >
        <div className="mobile-drawer-inner">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <a
              className="button button-coral mobile-drawer-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span>Agendar primeira visita</span>
              <ArrowUpRightIcon size={17} />
            </a>
            <p className="mobile-drawer-address">
              <MapPinIcon size={16} />
              <span>R. Presidente Kennedy, 622 · Centro · Cascavel/PR</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
