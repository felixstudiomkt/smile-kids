import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

const baseProps = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
});

export function ArrowUpRightIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDownIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h12" />
    </svg>
  );
}

export function CloseIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function PlusIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2.5} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function CheckIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2.8} {...props}>
      <path d="M5 12.5l4.2 4.2L19 7.5" />
    </svg>
  );
}

export function SparkleIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.2l2.45 6.35L20.8 11l-6.35 2.45L12 19.8l-2.45-6.35L3.2 11l6.35-2.45L12 2.2z" />
    </svg>
  );
}

export function SmileBadgeIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
      <path d="M8.5 14.2c1 1.6 2.2 2.3 3.5 2.3s2.5-.7 3.5-2.3" />
    </svg>
  );
}

export function HeartOutlineIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M12 20.2S4.5 15.6 4.5 9.8C4.5 6.9 6.7 4.8 9.2 4.8c1.5 0 2.8.8 2.8 2.1 0-1.3 1.3-2.1 2.8-2.1 2.5 0 4.7 2.1 4.7 5 0 5.8-7.5 10.4-7.5 10.4z" />
    </svg>
  );
}

export function MapPinIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0c0 5.4 6.5 11 6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function InstagramIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ClockIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20.4 11.7A8.5 8.5 0 0 1 8 19.2L3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 20.4 11.7Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6 8.9c-.2-.4-.4-.4-.7-.4h-.5c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4l-1.7-.8c-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* First-visit 5-step bespoke icons */

export function StepWelcomeIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M12 3.5l8 6.5v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10l8-6.5z" />
      <path d="M9.5 15.2c.8 1.2 1.6 1.8 2.5 1.8s1.7-.6 2.5-1.8" />
      <circle cx="9.8" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StepStoryIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M20.5 11.5c0 4.4-3.8 8-8.5 8-1.3 0-2.6-.3-3.7-.8L4 20l1.2-3.6a7.7 7.7 0 0 1-1.7-4.9c0-4.4 3.8-8 8.5-8s8.5 3.6 8.5 8z" />
      <path d="M9.3 11.2c0-.9.7-1.6 1.5-1.6.5 0 1 .3 1.2.8.2-.5.7-.8 1.2-.8.8 0 1.5.7 1.5 1.6 0 1.7-2.7 3.3-2.7 3.3s-2.7-1.6-2.7-3.3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StepExplorerIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="M15.6 15.6L20 20" strokeWidth={2.5} />
      <path d="M10.8 7.8v6M7.8 10.8h6" strokeWidth={1.9} />
    </svg>
  );
}

export function StepToothIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M8.5 4.8C5.9 4.8 4.2 6.8 4.2 9.6c0 4 2.2 9.6 4.7 9.6 1.2 0 2-1.8 3.1-3 1.1 1.2 1.9 3 3.1 3 2.5 0 4.7-5.6 4.7-9.6 0-2.8-1.7-4.8-4.3-4.8-1.5 0-2.4.7-3.5.7s-2-.7-3.5-.7z" />
      <path d="M9.5 10.6c.7 1.1 1.6 1.6 2.5 1.6s1.8-.5 2.5-1.6" />
    </svg>
  );
}

export function StepMissionIcon({ size = 28, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M12 3.5l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8L12 3.5z" />
    </svg>
  );
}

/* Care pillar & service icons */

export function PillarCareIcon({ size = 34, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2} {...props}>
      <path d="M12 19.5S5 15.2 5 9.8C5 7.1 7 5 9.4 5c1.4 0 2.6.8 2.6 2 0-1.2 1.2-2 2.6-2C17 5 19 7.1 19 9.8c0 5.4-7 9.7-7 9.7z" />
      <path d="M9.5 10.8c.7 1 1.5 1.5 2.5 1.5s1.8-.5 2.5-1.5" />
    </svg>
  );
}

export function PillarTeachIcon({ size = 34, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2} {...props}>
      <path d="M12 3l1.8 4.4L18.2 9.2l-4.4 1.8L12 15.4l-1.8-4.4L5.8 9.2l4.4-1.8L12 3z" />
      <path d="M18.5 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
      <path d="M6.2 16.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6.6-1.4z" />
    </svg>
  );
}

export function PillarFollowIcon({ size = 34, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2} {...props}>
      <path d="M20 11a8 8 0 0 0-14.2-4.8" />
      <path d="M4 4v4.5h4.5" />
      <path d="M4 13a8 8 0 0 0 14.2 4.8" />
      <path d="M20 20v-4.5h-4.5" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
}

export function ServicePreventionIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2.1} {...props}>
      <path d="M12 3.2l7 2.8v5.5c0 4.6-2.9 7.8-7 9.3-4.1-1.5-7-4.7-7-9.3V6l7-2.8z" />
      <path d="M9 12l2 2 4.2-4.2" />
    </svg>
  );
}

export function ServicePediatricIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2.1} {...props}>
      <path d="M8.5 4.8C5.9 4.8 4.2 6.8 4.2 9.6c0 4 2.2 9.6 4.7 9.6 1.2 0 2-1.8 3.1-3 1.1 1.2 1.9 3 3.1 3 2.5 0 4.7-5.6 4.7-9.6 0-2.8-1.7-4.8-4.3-4.8-1.5 0-2.4.7-3.5.7s-2-.7-3.5-.7z" />
      <circle cx="9.6" cy="9.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14.4" cy="9.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M9.6 12.2c.8.9 1.6 1.3 2.4 1.3s1.6-.4 2.4-1.3" />
    </svg>
  );
}

export function ServiceOrthoIcon({ size = 30, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} strokeWidth={2.1} {...props}>
      <path d="M3.5 11.5c2.2 5.4 5.2 8 8.5 8s6.3-2.6 8.5-8" />
      <path d="M5.5 11.5c2 2.2 4.3 3.2 6.5 3.2s4.5-1 6.5-3.2" />
      <path d="M9 14.3v4.2M15 14.3v4.2" strokeWidth={1.9} />
      <path d="M12 4.2l1.1 2.6 2.6 1.1-2.6 1.1L12 11.6l-1.1-2.6-2.6-1.1 2.6-1.1L12 4.2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Promise pillar icons */

export function FamilyBookIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <path d="M4.5 6.5C4.5 5.4 5.4 4.5 6.5 4.5H11c1 0 1.8.8 1.8 1.8v13.2s-1.2-1-3-1H6.5c-1.1 0-2 .9-2 2V6.5z" />
      <path d="M19.5 6.5c0-1.1-.9-2-2-2H14c-1 0-1.8.8-1.8 1.8v13.2s1.2-1 3-1h2.3c1.1 0 2 .9 2 2V6.5z" />
    </svg>
  );
}

export function PlayfulSpaceIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </svg>
  );
}

export function HonestChoiceIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...baseProps(size)} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.4 2.4 4.8-5.1" />
    </svg>
  );
}

/* Decorative Hero Underline & Trust Badges */

export function HeroUnderlineSvg() {
  return (
    <svg
      className="hero-underline"
      viewBox="0 0 320 18"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 12.5C68 4.2 178 2.8 316 11.2"
        stroke="#F7C64B"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrustBadges() {
  return (
    <div className="trust-badges" aria-hidden="true">
      <span className="trust-badge badge-teal">
        <SmileBadgeIcon size={18} />
      </span>
      <span className="trust-badge badge-yellow">
        <StepToothIcon size={18} />
      </span>
      <span className="trust-badge badge-coral">
        <HeartOutlineIcon size={17} />
      </span>
    </div>
  );
}

export function VisitTrailSvg() {
  return (
    <svg
      className="visit-trail"
      viewBox="0 0 1200 120"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M24 72 C 200 18, 360 112, 560 58 C 760 4, 960 104, 1176 44"
        stroke="#DFC79F"
        strokeWidth="4"
        strokeDasharray="10 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Bespoke Editorial Illustrations for "Para cuidar em casa" cards */

export function FirstVisitIllustration() {
  return (
    <svg viewBox="0 0 260 156" fill="none" aria-hidden="true" className="editorial-svg">
      <circle cx="52" cy="42" r="22" fill="#FFF7E8" fillOpacity="0.45" />
      <circle cx="212" cy="116" r="28" fill="#FFF7E8" fillOpacity="0.35" />
      <path d="M36 124c28-14 54-14 82 0s54 14 82 0 36-8 44-4" stroke="#18394B" strokeOpacity="0.18" strokeWidth="3" strokeLinecap="round" />
      {/* Smiling baby tooth */}
      <path
        d="M111 32c-16 0-27 11.5-27 27.5 0 22 12.5 52 26.5 52 7 0 11-10.5 19.5-17 8.5 6.5 12.5 17 19.5 17 14 0 26.5-30 26.5-52C176 43.5 165 32 149 32c-8.5 0-13.5 4.2-19 4.2S119.5 32 111 32Z"
        fill="#FFFDF8"
        stroke="#18394B"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="114" cy="63" r="4" fill="#18394B" />
      <circle cx="146" cy="63" r="4" fill="#18394B" />
      <circle cx="105" cy="72" r="5" fill="#FF795C" fillOpacity="0.55" />
      <circle cx="155" cy="72" r="5" fill="#FF795C" fillOpacity="0.55" />
      <path d="M117 74c3.8 5.2 8.2 7.5 13 7.5s9.2-2.3 13-7.5" stroke="#087F7C" strokeWidth="4" strokeLinecap="round" />
      {/* Sparkles */}
      <path d="M196 28l3.5 8.5 8.5 3.5-8.5 3.5-3.5 8.5-3.5-8.5-8.5-3.5 8.5-3.5L196 28Z" fill="#087F7C" />
      <path d="M62 84l2.4 5.6 5.6 2.4-5.6 2.4-2.4 5.6-2.4-5.6-5.6-2.4 5.6-2.4L62 84Z" fill="#FFFDF8" />
    </svg>
  );
}

export function BrushingHabitsIllustration() {
  return (
    <svg viewBox="0 0 240 156" fill="none" aria-hidden="true" className="editorial-svg">
      <circle cx="182" cy="40" r="22" fill="#FFF7E8" fillOpacity="0.28" />
      <circle cx="52" cy="112" r="16" fill="#F7C64B" fillOpacity="0.45" />
      {/* Playful toothbrush */}
      <g transform="rotate(-14 120 82)">
        <rect x="46" y="74" width="148" height="20" rx="10" fill="#FFFDF8" stroke="#18394B" strokeWidth="3.8" />
        <rect x="64" y="80" width="70" height="8" rx="4" fill="#087F7C" />
        {/* Bristles */}
        <path d="M150 74V54c0-3.3 2.7-6 6-6h24c3.3 0 6 2.7 6 6v20" fill="#F7C64B" stroke="#18394B" strokeWidth="3.8" strokeLinejoin="round" />
        <path d="M161 50v22M173 50v22" stroke="#18394B" strokeWidth="3" strokeLinecap="round" />
        {/* Toothpaste swirl */}
        <path d="M148 52c8-11 26-12 36-3 4 3.6 9 1.5 11-2" stroke="#FFFDF8" strokeWidth="7" strokeLinecap="round" />
        <path d="M148 52c8-11 26-12 36-3 4 3.6 9 1.5 11-2" stroke="#087F7C" strokeWidth="3.2" strokeLinecap="round" />
      </g>
      {/* Mint bubbles */}
      <circle cx="76" cy="48" r="11" fill="#FFFDF8" stroke="#18394B" strokeWidth="3" />
      <circle cx="98" cy="34" r="6" fill="#F7C64B" stroke="#18394B" strokeWidth="2.5" />
      <circle cx="188" cy="108" r="9" fill="#FFFDF8" stroke="#18394B" strokeWidth="3" />
    </svg>
  );
}

export function EmergencyCareIllustration() {
  return (
    <svg viewBox="0 0 240 156" fill="none" aria-hidden="true" className="editorial-svg">
      <circle cx="64" cy="44" r="18" fill="#FFFDF8" fillOpacity="0.45" />
      <circle cx="184" cy="112" r="24" fill="#FFFDF8" fillOpacity="0.35" />
      {/* Protective heart-shield */}
      <path
        d="M120 26l48 18v34c0 30-19.5 49-48 59-28.5-10-48-29-48-59V44l48-18Z"
        fill="#FFFDF8"
        stroke="#18394B"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M120 104s-22-13.5-22-29.5c0-8 6-14.2 13.4-14.2 4.2 0 7.4 2.2 8.6 5.4 1.2-3.2 4.4-5.4 8.6-5.4 7.4 0 13.4 6.2 13.4 14.2 0 16-22 29.5-22 29.5Z"
        fill="#087F7C"
        stroke="#18394B"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M120 71v14M113 78h14" stroke="#FFFDF8" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M184 36l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#087F7C" />
    </svg>
  );
}
