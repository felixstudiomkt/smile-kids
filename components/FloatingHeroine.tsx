"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, SparkleIcon } from "./Icons";

type FloatingHeroineProps = {
  whatsappUrl: string;
};

type SectionId =
  | "inicio"
  | "primeira-visita"
  | "cuidados"
  | "sobre"
  | "duvidas"
  | "contato";

const SECTION_MESSAGES: Record<SectionId, { title: string; text: string }> = {
  inicio: {
    title: "Super Dra. Anne",
    text: "Oi! Prontos para uma aventura sem medo?",
  },
  "primeira-visita": {
    title: "Missão 1ª visita",
    text: "5 passinhos leves e divertidos no tempo da criança!",
  },
  cuidados: {
    title: "Poder Cárie Zero",
    text: "Prevenção leve para os pequenos e tranquila para você.",
  },
  sobre: {
    title: "Nos bastidores!",
    text: "Essa sou eu na vida real — mais de 21 anos cuidando de sorrisos!",
  },
  duvidas: {
    title: "Tira-dúvidas",
    text: "Se quiser perguntar algo específico, chama a gente no WhatsApp!",
  },
  contato: {
    title: "Te esperamos!",
    text: "Vamos combinar o melhor horário para a primeira visita?",
  },
};

const OBSERVED_IDS: SectionId[] = [
  "inicio",
  "primeira-visita",
  "cuidados",
  "sobre",
  "duvidas",
  "contato",
];

export function FloatingHeroine({ whatsappUrl }: FloatingHeroineProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("inicio");
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Track active section smoothly via IntersectionObserver
  useEffect(() => {
    if (dismissed) return;

    const elements = OBSERVED_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best?.target.id) {
          setActiveSection(best.target.id as SectionId);
        }
      },
      {
        rootMargin: "-22% 0px -38% 0px",
        threshold: [0.1, 0.35, 0.65],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dismissed]);

  // Smooth GPU-composited scroll flight (zero React re-renders per frame)
  useEffect(() => {
    if (dismissed) return;

    const mediaReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaReduce.matches) return;

    let rafId = 0;
    let currentY = 0;
    let currentX = 0;
    let currentTilt = 0;
    let lastScrollY = window.scrollY;
    let targetTilt = 0;

    const computeTargets = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));

      // Gentle vertical flight travel within safe desktop lane (0px -> 36vh)
      const travelY = progress * Math.min(window.innerHeight * 0.36, 300);
      // Playful organic sine wave drift horizontally (-14px .. +8px)
      const driftX = Math.sin(progress * Math.PI * 3.2) * 14;

      return { travelY, driftX };
    };

    const tick = () => {
      const { travelY, driftX } = computeTargets();
      currentY += (travelY - currentY) * 0.085;
      currentX += (driftX - currentX) * 0.085;
      currentTilt += (targetTilt - currentTilt) * 0.1;
      targetTilt *= 0.88;

      if (stageRef.current) {
        stageRef.current.style.setProperty("--flight-x", `${currentX.toFixed(1)}px`);
        stageRef.current.style.setProperty("--flight-y", `${currentY.toFixed(1)}px`);
        stageRef.current.style.setProperty(
          "--flight-tilt",
          `${currentTilt.toFixed(2)}deg`,
        );
      }

      const settled =
        Math.abs(travelY - currentY) < 0.2 &&
        Math.abs(driftX - currentX) < 0.2 &&
        Math.abs(currentTilt) < 0.05;

      if (!settled) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const onScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      targetTilt = Math.max(-7, Math.min(7, delta * 0.18));

      if (!rafId) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const message = SECTION_MESSAGES[activeSection];

  return (
    <aside
      className={`heroine-layer ${bubbleOpen ? "is-open" : ""}`}
      aria-label="Mascote interativa Super Dra. Anne"
    >
      <div ref={stageRef} className="heroine-flight">
        <div
          id="heroine-bubble"
          className="heroine-bubble"
          role="status"
          aria-live="polite"
        >
          <div className="heroine-bubble-top">
            <span className="heroine-bubble-title">{message.title}</span>
            <button
              type="button"
              className="heroine-bubble-close"
              aria-label="Fechar balão da Super Dra. Anne"
              onClick={() => setBubbleOpen(false)}
            >
              <CloseIcon size={14} />
            </button>
          </div>
          <p>{message.text}</p>
          <a
            className="heroine-bubble-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Agendar consulta</span>
            <ArrowUpRightIcon size={14} />
          </a>
        </div>

        <div className="heroine-bob">
          <button
            type="button"
            className="heroine-dismiss"
            aria-label="Esconder mascote Super Dra. Anne"
            title="Esconder mascote"
            onClick={() => setDismissed(true)}
          >
            <CloseIcon size={13} />
          </button>

          <button
            type="button"
            className="heroine-trigger"
            aria-expanded={bubbleOpen}
            aria-controls="heroine-bubble"
            aria-label={
              bubbleOpen
                ? "Fechar mensagem da Super Dra. Anne"
                : "Abrir dica da Super Dra. Anne"
            }
            onClick={() => setBubbleOpen((prev) => !prev)}
          >
            <SparkleIcon size={16} className="heroine-sparkle spark-a" />
            <SparkleIcon size={11} className="heroine-sparkle spark-b" />
            <picture>
              <source
                type="image/webp"
                srcSet="/super-dra-anne-260.webp 260w, /super-dra-anne.webp 400w"
                sizes="(max-width: 1040px) 84px, 128px"
              />
              <img
                src="/super-dra-anne.png"
                alt="Super Dra. Anne — super-heroína do Cárie Zero voando com sua escova mágica"
                width={400}
                height={496}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </picture>
          </button>
        </div>
      </div>
    </aside>
  );
}
