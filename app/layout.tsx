import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    "https://smile-kids.pages.dev",
);
const title = "Smile Kids Odontologia | Cárie Zero em Cascavel";
const description =
  "Odontopediatria e ortodontia com acolhimento, prevenção e acompanhamento desde os primeiros dentinhos, em Cascavel/PR.";
const socialImage = new URL("/og.jpg", baseUrl).toString();

export const viewport: Viewport = {
  themeColor: "#fff7e8",
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title,
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Uma aventura sem medo — Smile Kids Odontologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
