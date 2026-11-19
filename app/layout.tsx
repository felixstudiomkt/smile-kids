import type { Metadata } from "next";
import "./globals.css";

const baseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    "https://smile-kids.pages.dev",
);
const title = "Smile Kids Odontologia | Cárie Zero em Cascavel";
const description = "Odontopediatria e ortodontia com acolhimento, prevenção e acompanhamento desde os primeiros dentinhos, em Cascavel/PR.";
const socialImage = new URL("/og.png", baseUrl).toString();

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Uma aventura sem medo — Smile Kids Odontologia" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
